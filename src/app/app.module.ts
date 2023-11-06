import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewExpenseComponent } from './components/new-expense/new-expense/new-expense.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from "@angular/material/chips";
import {MatAutocomplete, MatAutocompleteModule} from "@angular/material/autocomplete";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {    MatAutocompleteOrigin} from "@angular/material/autocomplete";
import {MatLegacyAutocompleteSelectedEvent} from "@angular/material/legacy-autocomplete";
import {AutocompleteLibModule} from "angular-ng-autocomplete";
import { AddedExpenseModalComponent } from './components/new-expense/added-expense-modal/added-expense-modal/added-expense-modal.component';
import { ExpensesTableComponent } from './components/expenses-table/expenses-table/expenses-table.component';
import { EditExpenseModalComponent } from './components/expenses-table/edit-expense-modal/edit-expense-modal.component';
import { AlertComponent } from './components/common/alert/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NewExpenseComponent,
    AddedExpenseModalComponent,
    ExpensesTableComponent,
    EditExpenseModalComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    AutocompleteLibModule



  ],
  providers: [{ provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: {separatorKeyCodes: [13,188]}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
