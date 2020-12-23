import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EppenTobraGridComponent } from './eppen-tobra-grid.component';

describe('EppenTobraGridComponent', () => {
  let component: EppenTobraGridComponent;
  let fixture: ComponentFixture<EppenTobraGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EppenTobraGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EppenTobraGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
