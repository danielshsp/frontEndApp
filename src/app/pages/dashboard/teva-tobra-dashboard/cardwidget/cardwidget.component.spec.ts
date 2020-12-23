import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TevaCardwidgetComponent } from './cardwidget.component';

describe('CardwidgetComponent', () => {
  let component: TevaCardwidgetComponent;
  let fixture: ComponentFixture<TevaCardwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TevaCardwidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TevaCardwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
