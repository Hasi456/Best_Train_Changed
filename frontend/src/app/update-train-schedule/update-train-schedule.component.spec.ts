import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainScheduleComponent } from './update-train-schedule.component';

describe('UpdateTrainScheduleComponent', () => {
  let component: UpdateTrainScheduleComponent;
  let fixture: ComponentFixture<UpdateTrainScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTrainScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrainScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
