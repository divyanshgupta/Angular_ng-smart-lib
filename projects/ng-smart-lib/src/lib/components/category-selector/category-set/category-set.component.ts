import {
  Component,
  ComponentFactoryResolver,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, interval, merge, Observable, Subject, Subscription } from 'rxjs';
import { CategoryNode } from '../category-selector.component';

@Component({
  selector: 'lib-category-set',
  templateUrl: './category-set.component.html',
  styleUrls: ['./category-set.component.css'],
})
export class NgCategorySetComponent implements OnInit {
  @Input() data: CategoryNode[];
  private preselectionSubject = new BehaviorSubject<any[]>([]);
  @Input()
  set selected(value: (string | number)[]) {
    this.preselectionSubject.next(value);
  }
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  selectedCategory: CategoryNode;
  @Output() selection: EventEmitter<CategoryNode> = new EventEmitter();
  constructor(private resolver: ComponentFactoryResolver) {}
  ngOnInit(): void {
    this.preselectionSubject.subscribe((newValue) => {
      if (newValue === null) {
        this.selectedCategory = null;
        this.removeChild();
      }

      if (this.data && newValue) {
        newValue.forEach((nodeID) => {
          this.data.forEach((node) => {
            if (node.id === nodeID) {
              this.clickChip(null, node, newValue);
            }
          });
        });
      }
    });
  }
  clickChip(_, category, preselection: any[]): void {
    this.removeChild();
    if (preselection || preselection === null) {
      this.selectedCategory = category;
    } else {
      this.selectedCategory = this.selectedCategory && this.selectedCategory.id === category.id ? null : category;
      this.selection.emit(this.selectedCategory);
    }

    this.insertChild(preselection);
  }
  removeChild(): void {
    this.vc.clear();
  }
  trackByFn(item: CategoryNode): string | number {
    return item.id;
  }
  insertChild(preselection: any[]): void {
    if (this.selectedCategory && this.selectedCategory.children.length) {
      const compFactory = this.resolver.resolveComponentFactory(NgCategorySetComponent);

      const component = this.vc.createComponent(compFactory);
      component.instance.data = this.selectedCategory.children;
      component.instance.selected = preselection;
      component.instance.selection.subscribe((event) => this.emitSelection(event));
    }
  }
  emitSelection(category: CategoryNode | null): void {
    if (category) {
      this.selection.emit(category);
    } else {
      this.selection.emit(this.selectedCategory);
    }
  }
}
