import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EppenTobraDashboardComponent } from './eppen-tobra-dashboard.component';

describe('EppenTobraDashboardComponent', () => {
  let component: EppenTobraDashboardComponent;
  let fixture: ComponentFixture<EppenTobraDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EppenTobraDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EppenTobraDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
