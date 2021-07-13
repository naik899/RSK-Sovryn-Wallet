import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotpricesComponent } from './spotprices.component';

describe('SpotpricesComponent', () => {
  let component: SpotpricesComponent;
  let fixture: ComponentFixture<SpotpricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotpricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
