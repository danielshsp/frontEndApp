import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TevaUnitchartComponent } from './unitchart.component';

describe('TevaUnitchartComponent', () => {
  let component: TevaUnitchartComponent;
  let fixture: ComponentFixture<TevaUnitchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TevaUnitchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TevaUnitchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
