import { Component, ContentChild, EventEmitter, forwardRef, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, interval, merge, Observable, Subject, Subscription } from 'rxjs';
export interface CategoryNode {
  name: string;
  id: string | number;
  children: CategoryNode[];
}
const CATEGORY_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgCategorySelectorComponent),
  multi: true,
};
@Component({
  selector: 'lib-category-selector',
  providers: [CATEGORY_CONTROL_ACCESSOR],
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css'],
})
export class NgCategorySelectorComponent implements OnInit {
  preselection: (string | number)[] | null = [];
  private preselectionSubject = new BehaviorSubject<CategoryNode>(null);
  private onTouch: (_: any) => void;
  private onModelChange: (_: any) => void;

  @Input() data: CategoryNode[];

  @Input()
  set select(value: CategoryNode) {
    this.preselectionSubject.next(value);
  }

  @Output() selection: EventEmitter<CategoryNode> = new EventEmitter();
  ngOnInit(): void {
    this.preselectionSubject.subscribe((value) => {
      if (value) {
        console.log(`Preselection Subject Changed to ${JSON.stringify(value)}`);
        this.preselection = this.getSelectionHierarchy(this.data, value);
        console.log(`Preselection value set to ${this.preselection}`);
      } else if (value == null) {
        this.preselection = null;
      }
    });
  }
  writeValue(value: CategoryNode): void {
    this.preselectionSubject.next(value || null);
  }

  registerOnTouched(fn: (_: any) => void): void {
    this.onTouch = fn;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onModelChange = fn;
  }

  private getSelectionHierarchy(tree: CategoryNode[], searchedCategory: CategoryNode): (string | number)[] {
    let result;
    for (const node of tree) {
      if (node.hasOwnProperty('children')) {
        result = this.getSelectionHierarchy(node.children, searchedCategory);
        if (result && result.length) return [node.id, ...result];
      }
      if (node.id === searchedCategory.id) return [node.id];
    }
    return result;
  }
  onCategorySelection(event: CategoryNode): void {
    this.selection.emit(event);
    if (this.onModelChange) {
      this.onModelChange(event);
      this.onTouch(event);
    }
  }
}
