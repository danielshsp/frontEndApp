import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TevaPieComponent } from './pie.component';

describe('PieComponent', () => {
  let component: TevaPieComponent;
  let fixture: ComponentFixture<TevaPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TevaPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TevaPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
