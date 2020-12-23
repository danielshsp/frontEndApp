import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TevaTobraDashboardComponent } from './teva-tobra-dashboard.component';

describe('TevaTobraDashboardComponent', () => {
  let component: TevaTobraDashboardComponent;
  let fixture: ComponentFixture<TevaTobraDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TevaTobraDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TevaTobraDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
