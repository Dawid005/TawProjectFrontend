import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Expense} from "../../../models/Expense";
import {ExpenseEditOperation} from "../../../models/ExpenseEditOperation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../../services/expense/expense.service";

@Component({
  selector: 'app-edit-expense-modal',
  templateUrl: './edit-expense-modal.component.html',
  styleUrls: ['./edit-expense-modal.component.css']
})
export class EditExpenseModalComponent implements OnInit {

  public operationType: String;
  public editForm: FormGroup;
  public editedForm: any;
  public startingExpenseData: Expense;

  //
  public get dateCtrl(): FormControl {
    return this.editForm.get('date') as FormControl;
  }

  public get tagsCtrl(): FormControl {
    return this.editForm.get('tags') as FormControl;
  }

  public get valueCtrl(): FormControl {
    return this.editForm.get('value') as FormControl;
  }

  constructor(
    public dialogRef: MatDialogRef<EditExpenseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExpenseEditOperation,
    private expenseService: ExpenseService
  ) {
    this.startingExpenseData = data.expense;
    this.operationType = data.operationType;
    this.editForm = new FormGroup({
      date: new FormControl(data.expense.date, Validators.compose([Validators.required])),
      value: new FormControl(data.expense.value, Validators.compose([Validators.required, Validators.pattern('^(?:0|[1-9][0-9]*)\.[0-9]+$')])),
      tags: new FormControl(data.expense.tags.map(el => el.name), Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
    this.editForm.valueChanges.subscribe(response => {
       this.editedForm = response;
    });
  }

  public submitChangesButton() {
    let tags = this.editedForm.tags;
    let date = this.editedForm.date;
    let value = this.editedForm.value;
    let id = this.startingExpenseData.id;
    if (typeof (date) === "object") {
      date = date.toISOString();
    }
    let editedExpense: Expense = {
      id: id,
      tags: tags,
      value: value,
      date: date
    }
    this.expenseService.saveExpense(editedExpense).subscribe(response => {
      this.dialogRef.close();
    });
  }

  public deleteExpenseClickHandler(){
    this.expenseService.deleteExpense(this.startingExpenseData.id).subscribe(response=>{
      this.dialogRef.close();
    });
  }

  public cancelClickHandler() {
    this.dialogRef.close();
  }

}
