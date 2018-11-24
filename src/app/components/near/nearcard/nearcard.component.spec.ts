import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearcardComponent } from './nearcard.component';

describe('NearcardComponent', () => {
  let component: NearcardComponent;
  let fixture: ComponentFixture<NearcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
