import {Component, OnInit} from '@angular/core';
import {Expense} from "../../../models/Expense";
import {Tag} from "../../../models/Tag";
import {ExpenseService} from "../../../services/expense/expense.service";
import {MatDialog} from "@angular/material/dialog";
import {
  AddedExpenseModalComponent
} from "../../new-expense/added-expense-modal/added-expense-modal/added-expense-modal.component";
import {EditExpenseModalComponent} from "../edit-expense-modal/edit-expense-modal.component";

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent implements OnInit{

  public displayedColumns : string[] = ['id', 'date', 'tags', 'value','crud'];
  public allExpenses: Expense[];

  constructor(private expensesService: ExpenseService,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllExpenses();

  }
  public getAllExpenses(){
    this.expensesService.getAllExpenses().subscribe(response =>{
      this.allExpenses = response;
    });
  }
  public mapTags(param: Tag[]){
    if(!param){
      return [];
    }else{
      let tagsList: String[] = [];
      param.map(el => tagsList.push(String(el.name)));
      return tagsList.join(', ');
    }
  }

  public openDialog(element: Expense, operationType: String){
    let expenseEditOperation = {
      operationType: operationType,
      expense: element
    }
    let dialogRef = this.dialog.open(EditExpenseModalComponent, {
      width: '250px',
      data: expenseEditOperation
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.getAllExpenses();
    });

  }
}
