/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  modalOpen = true;
  public highlightedItemId: number;
  public removeSelection(id: number): void {
        let selectedItem: DiffListItem = this.resultsList.filter(item => item.id === id)[0];
        selectedItem.selectedOption = SelectedDiffOption.NotSelected;
        this.resultsList.splice(this.resultsList.indexOf(selectedItem), 1);
  }

  public selectOption(id: number, option: SelectedDiffOption): void {
    let selectedItem: DiffListItem = this.listItems.filter(item => item.id === id)[0];
    selectedItem.selectedOption = option;
    if (this.resultsList.map(result => result.id).indexOf(selectedItem.id) === -1) {
      this.resultsList.push(selectedItem);
    }
  }
  public resultsList: Array<DiffListItem> = [];

  public onItemHighlight(id: number): void {
    this.highlightedItemId = id;
    console.log("ID IS: ", id);
  }

  public listItems: Array<DiffListItem> = [
    new DiffListItem(0, "Age : Aggregate", "Age : Sensitive", SelectedDiffOption.NotSelected),
    new DiffListItem(1, "Date of Birth : Aggregate", "Date of Birth : No Access", SelectedDiffOption.NotSelected),
    new DiffListItem(2, "First Name  : Aggregate", "First Name : Sensitive", SelectedDiffOption.NotSelected),
  ];
}

export class MenuOption {
  constructor(public selected: boolean, public value: string, public displayName: string, public isOdd: boolean) { }
}

export enum CheckboxNetState {
  INDETERMINATE, CHECKED, UNCHECKED
}



export class DiffListItem {
  constructor(public id: number,
    public leftOption: string,
    public rightOption: string,
    public selectedOption: SelectedDiffOption) { }

    public get rightSideSelected(): boolean {
      return this.selectedOption === SelectedDiffOption.RightOption;
    }

    public get leftSideSelected(): boolean {
      return this.selectedOption === SelectedDiffOption.LeftOption;
    }

    public get selectedOptionString(): string {
      return this.rightSideSelected ? this.rightOption : this.leftOption;
    }
}

enum SelectedDiffOption {
  NotSelected = 0,
  LeftOption = 1,
  RightOption = 2
}