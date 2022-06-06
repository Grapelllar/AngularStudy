import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class04Component } from './class04.component';

describe('Class04Component', () => {
  let component: Class04Component;
  let fixture: ComponentFixture<Class04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Class04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Class04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
