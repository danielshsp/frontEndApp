import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EppenPieComponent } from './pie.component';

describe('PieComponent', () => {
  let component: EppenPieComponent;
  let fixture: ComponentFixture<EppenPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EppenPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EppenPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
