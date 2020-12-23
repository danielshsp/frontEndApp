import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EppenCardwidgetComponent } from './cardwidget.component';

describe('EppenCardwidgetComponent', () => {
  let component: EppenCardwidgetComponent;
  let fixture: ComponentFixture<EppenCardwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EppenCardwidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EppenCardwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
