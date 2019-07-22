export class MenuOption {
  constructor(public selected: boolean, public value: string, public displayName: string, public isOdd: boolean) { }
}

export class DiffListItem {
  constructor(public readonly id: number,
    public readonly baseOption: DiffOptionObject,
    public readonly leftOption: DiffOptionObject,
    public readonly rightOption: DiffOptionObject,
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
      return this.selectedOption === SelectedDiffOption.NotSelected ? "" : this.rightSideSelected ? this.rightOption.summaryDesc : this.leftOption.summaryDesc;
    }
}

export enum SelectedDiffOption {
  NotSelected = 0,
  LeftOption = 1,
  RightOption = 2
}

export class DiffOptionObject {
  constructor(public readonly summaryDesc: string,
              public readonly fieldValueList: Array<DiffFieldValuePair>){}
}

export class DiffFieldValuePair {
  constructor(
    public readonly baseValue: string,
    public readonly lhsValue: string,
    public readonly rhsValue: string,
    public readonly hasChanged: boolean
  ){}
}