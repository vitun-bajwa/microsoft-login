import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-tab-group',
  templateUrl: './mat-tab-group.component.html',
  styleUrls: ['./mat-tab-group.component.css']
})
export class MatTabGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tabs = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}