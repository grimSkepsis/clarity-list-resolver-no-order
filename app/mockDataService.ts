import {SelectedDiffOption, DiffListItem, DiffOptionObject, DiffFieldValuePair} from './listResolveUtil';
export class MockDataService {

  public static getData(): any {
    return [
    new DiffListItem(0,
      "Age : Sensitive",
      "Age : Aggregate",
      "Age : Sensitive",
      "Age", SelectedDiffOption.NotSelected,
      [
        new DiffFieldValuePair(
          "propertyId",
          "age",
          "age",
          "age",
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "Sensitive",
          "Aggregate",
          "Sensitive",
          true
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false
        )
      ]),
    new DiffListItem(1, 
      "Date of Birth : No Access",
      "Date of Birth : Aggregate",
      "Date of Birth : No Access",
      "Date of Birth", SelectedDiffOption.NotSelected),
    new DiffListItem(2,      
      "First Name  : Sensitive",
      "First Name  : Aggregate",
      "First Name : Sensitive",
        "First Name", SelectedDiffOption.NotSelected),
    new DiffListItem(3,
      "Eye Color : No Access",
      "Eye Color : Aggregate",
      "Eye Color : Sensitive",
        "Eye Color", SelectedDiffOption.NotSelected),

    new DiffListItem(10,
      "Vacation Days : No Access",
      "Vacation Days : Aggregate",
      "Vacation Days : No Access",
      "Vacation Days", SelectedDiffOption.NotSelected),
    new DiffListItem(4,
      "Hair Color : No Access",
      "Hair Color : Aggregate",
      "Hair Color : No Access",
       "Hair Color", SelectedDiffOption.NotSelected),
    new DiffListItem(5,
      "Last Name  : Aggregate",
      "Last Name  : Aggregate",
      "Last Name : Sensitive",
       "Last Name", SelectedDiffOption.NotSelected),
    new DiffListItem(6,
      "Height : Sensitive",
      "Height : Aggregate",
      "Height : Sensitive",
           "Height", SelectedDiffOption.NotSelected),
    new DiffListItem(7,
      "Salary : No Access",
      "Salary : Aggregate",
      "Salary : No Access",
        "Salary", SelectedDiffOption.NotSelected),
    new DiffListItem(8, 
      "Employee ID  : Sensitive",
      "Employee ID  : Aggregate",
      "Employee ID : Sensitive",
       "Employee ID", SelectedDiffOption.NotSelected),
    new DiffListItem(9, 
      "Gender: No Access",
      "Gender: Aggregate",
      "Gender : Sensitive",
       "Gender", SelectedDiffOption.NotSelected),
    new DiffListItem(11, 
      "Marital Status  : Aggregate",
      "Marital Status  : Aggregate",
      "Marital Status : Sensitive",
       "Marital Status", SelectedDiffOption.NotSelected),
  ];
  }
}