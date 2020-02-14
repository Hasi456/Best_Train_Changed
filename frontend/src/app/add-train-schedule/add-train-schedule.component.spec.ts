import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainScheduleComponent } from './add-train-schedule.component';

describe('AddTrainScheduleComponent', () => {
  let component: AddTrainScheduleComponent;
  let fixture: ComponentFixture<AddTrainScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
