import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TevaTobraGridComponent } from './teva-tobra-grid.component';

describe('TevaTobraGridComponent', () => {
  let component: TevaTobraGridComponent;
  let fixture: ComponentFixture<TevaTobraGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TevaTobraGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TevaTobraGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
