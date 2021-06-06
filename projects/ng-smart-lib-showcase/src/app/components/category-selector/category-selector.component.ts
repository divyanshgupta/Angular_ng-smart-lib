import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CategoryNode } from 'projects/ng-smart-lib/src/public-api';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css'],
})
export class CategorySelectorComponent implements OnInit {
  selectedCat: CategoryNode;
  output: string;
  selection: CategoryNode | null;
  list: CategoryNode[];
  categoryData: CategoryNode[] = [
    {
      id: 1,
      name: 'Fruits',
      children: [
        {
          id: 3,
          name: 'Tropical',
          children: [
            {
              id: 9,
              name: 'Subtropical',
              children: [],
            },
          ],
        },
        { id: 4, name: 'Melons', children: [] },
        { id: 5, name: 'Berries', children: [] },
        { id: 6, name: 'Citrus', children: [] },
      ],
    },
    {
      id: 2,
      name: 'Vegetables',
      children: [
        { id: 7, name: 'Leaves', children: [] },
        { id: 8, name: 'Root', children: [] },
      ],
    },
  ];
  exampleForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // Example 2
    this.list = [
      this.categoryData[0].children[0].children[0],
      this.categoryData[0],
      this.categoryData[1],
      this.categoryData[1].children[1],
    ];

    // Example 3
    this.exampleForm = this.fb.group({
      categoryControl: new FormControl(this.list[0]),
    });
  }
  ngOnInit(): void {}
  onCategorySelect(category: CategoryNode): void {
    this.selectedCat = category;

    if (category) {
      this.output = `Selected category name:  <strong>${category.name}</strong>  (id: ${category.id})`;
    } else {
      this.output = 'Choose a category!';
    }
  }
}
