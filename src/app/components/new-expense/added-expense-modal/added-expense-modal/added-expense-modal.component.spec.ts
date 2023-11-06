import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedExpenseModalComponent } from './added-expense-modal.component';

describe('AddedExpenseModalComponent', () => {
  let component: AddedExpenseModalComponent;
  let fixture: ComponentFixture<AddedExpenseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedExpenseModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedExpenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
