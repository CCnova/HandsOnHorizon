import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfistComponent } from './surfist.component';

describe('SurfistComponent', () => {
  let component: SurfistComponent;
  let fixture: ComponentFixture<SurfistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
