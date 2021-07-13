import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuetransferComponent } from './valuetransfer.component';

describe('ValuetransferComponent', () => {
  let component: ValuetransferComponent;
  let fixture: ComponentFixture<ValuetransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuetransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuetransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
