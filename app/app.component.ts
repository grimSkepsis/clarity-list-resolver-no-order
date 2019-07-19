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
    public listItems: Array<DiffListItem> = [
    new DiffListItem(0, "Age : Aggregate", "Age : Sensitive", SelectedDiffOption.NotSelected),
    new DiffListItem(1, "Date of Birth : Aggregate", "Date of Birth : No Access", SelectedDiffOption.NotSelected),
    new DiffListItem(2, "First Name  : Aggregate", "First Name : Sensitive", SelectedDiffOption.NotSelected),
    new DiffListItem(3, "Eye Color : Aggregate", "Eye Color : Sensitive", SelectedDiffOption.NotSelected),

    new DiffListItem(10, "Vacation Days : Aggregate", "Vacation Days : No Access", SelectedDiffOption.NotSelected),
    new DiffListItem(4, "Hair Color : Aggregate", "Hair Color : No Access", SelectedDiffOption.NotSelected),
    new DiffListItem(5, "Last Name  : Aggregate", "Last Name : Sensitive", SelectedDiffOption.NotSelected),
    new DiffListItem(6, "Height : Aggregate", "Height : Sensitive", SelectedDiffOption.NotSelected),
    new DiffListItem(7, "Salary : Aggregate", "Salary : No Access", SelectedDiffOption.NotSelected),
    new DiffListItem(8, "Employee ID  : Aggregate", "Employee ID : Sensitive", SelectedDiffOption.NotSelected),
    new DiffListItem(9, "Gender: Aggregate", "Gender : Sensitive", SelectedDiffOption.NotSelected),
    new DiffListItem(11, "Marital Status  : Aggregate", "Marital Status : Sensitive", SelectedDiffOption.NotSelected),
  ];

    public resultsList: Array<DiffListItem> = this.listItems;
    public confirmationList: Array<DiffListItem> = [];
  modalOpen = true;
  public highlightedItemId: number;
  public removeSelection(id: number): void {
        let selectedItem: DiffListItem = this.resultsList.filter(item => item.id === id)[0];
        selectedItem.selectedOption = SelectedDiffOption.NotSelected;
        this._updateConfirmationList();
  }

  public selectOption(id: number, option: SelectedDiffOption): void {
    let selectedItem: DiffListItem = this.listItems.filter(item => item.id === id)[0];
    selectedItem.selectedOption = option;
    this._updateConfirmationList();
  }

  public selectAll(selectionSide: SelectedDiffOption): void {
    switch(selectionSide) {
      case SelectedDiffOption.LeftOption : {
        this.listItems.map(item => item.selectedOption = SelectedDiffOption.LeftOption);
        break;
      }
      case SelectedDiffOption.RightOption : {
        this.listItems.map(item => item.selectedOption = SelectedDiffOption.RightOption);
        break;
      }
      default : {
        this.listItems.map(item => item.selectedOption = SelectedDiffOption.NotSelected);
      }
    }

  }


  public onItemHighlight(id: number): void {
    this.highlightedItemId = id;
    console.log("ID IS: ", id);
  }



    private _updateConfirmationList(): void {
      this.confirmationList = this.resultsList.filter(item => item.selectedOption !== SelectedDiffOption.NotSelected);
    }
}

export class MenuOption {
  constructor(public selected: boolean, public value: string, public displayName: string, public isOdd: boolean) { }
}

export class DiffListItem {
  constructor(public readonly id: number,
    public readonly leftOption: string,
    public readonly rightOption: string,
    public selectedOption: SelectedDiffOption) { }

    public get rightSideSelected(): boolean {
      return this.selectedOption === SelectedDiffOption.RightOption;
    }

    public get leftSideSelected(): boolean {
      return this.selectedOption === SelectedDiffOption.LeftOption;
    }

    public get selectedOptionString(): string {
      return this.selectedOption === SelectedDiffOption.NotSelected ? "" : this.rightSideSelected ? this.rightOption : this.leftOption;
    }
}

enum SelectedDiffOption {
  NotSelected = 0,
  LeftOption = 1,
  RightOption = 2
}