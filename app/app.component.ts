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
    public modalOpen = true;
    public highlightedItemId: number;
    public listItems: Array<DiffListItem> = [
    new DiffListItem(0, "Age : Aggregate", "Age : Sensitive", "Age", SelectedDiffOption.NotSelected),
    new DiffListItem(1, "Date of Birth : Aggregate", "Date of Birth : No Access", "Date of Birth", SelectedDiffOption.NotSelected),
    new DiffListItem(2, "First Name  : Aggregate", "First Name : Sensitive", "First Name", SelectedDiffOption.NotSelected),
    new DiffListItem(3, "Eye Color : Aggregate", "Eye Color : Sensitive", "Eye Color", SelectedDiffOption.NotSelected),

    new DiffListItem(10, "Vacation Days : Aggregate", "Vacation Days : No Access", "Vacation Days", SelectedDiffOption.NotSelected),
    new DiffListItem(4, "Hair Color : Aggregate", "Hair Color : No Access", "Hair Color", SelectedDiffOption.NotSelected),
    new DiffListItem(5, "Last Name  : Aggregate", "Last Name : Sensitive", "Last Name", SelectedDiffOption.NotSelected),
    new DiffListItem(6, "Height : Aggregate", "Height : Sensitive",  "Height", SelectedDiffOption.NotSelected),
    new DiffListItem(7, "Salary : Aggregate", "Salary : No Access", "Salary", SelectedDiffOption.NotSelected),
    new DiffListItem(8, "Employee ID  : Aggregate", "Employee ID : Sensitive", "Employee ID", SelectedDiffOption.NotSelected),
    new DiffListItem(9, "Gender: Aggregate", "Gender : Sensitive", "Gender", SelectedDiffOption.NotSelected),
    new DiffListItem(11, "Marital Status  : Aggregate", "Marital Status : Sensitive", "Marital Status", SelectedDiffOption.NotSelected),
  ];

    public resultsList: Array<DiffListItem> = this.listItems;
    public confirmationList: Array<DiffListItem> = [];
    public isClearSelectionVisible: boolean = false;
    public showingMoreInfo: boolean = false;
    public moreInfoTitle: string;

    public onShowMoreInfo(event: Event, id: number): void {
      this.showingMoreInfo = true;
      event.stopPropagation();
      this.moreInfoTitle = this._findItemById(id).title;
    } 

    public onCloseMoreInfo(): void {
      this.showingMoreInfo = false;
    }

private _findItemById(id: number): DiffListItem {
 return this.resultsList.filter(item => item.id === id)[0];
}
  public removeSelection(id: number): void {
        this._findItemById(id).selectedOption = SelectedDiffOption.NotSelected;
        this._updateConfirmationList();
        this._updateClearSelectionVisibility();
  }

  public selectOption(id: number, option: SelectedDiffOption): void {
    let selectedItem: DiffListItem = this.listItems.filter(item => item.id === id)[0];
    selectedItem.selectedOption = option;
    this._updateConfirmationList();
    this._updateClearSelectionVisibility();
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
    this._updateConfirmationList();
    this._updateClearSelectionVisibility();
  }


  public onItemHighlight(id: number): void {
    this.highlightedItemId = id;
    console.log("ID IS: ", id);
  }

  private _updateClearSelectionVisibility(): void {
   this.isClearSelectionVisible = this.listItems.map(item => item.selectedOption).reduce(function areAllItemsUnselected(acc: boolean, nextItem: SelectedDiffOption): boolean {
      return acc || nextItem !== SelectedDiffOption.NotSelected;
    }, false);
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
    public readonly title: string,
    public selectedOption: SelectedDiffOption,
) { }

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