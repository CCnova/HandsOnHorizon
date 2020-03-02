import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BateryComponent } from './batery.component';

describe('BateryComponent', () => {
  let component: BateryComponent;
  let fixture: ComponentFixture<BateryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BateryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
