import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2ModifyComponent } from './child2-modify.component';

describe('Child2ModifyComponent', () => {
  let component: Child2ModifyComponent;
  let fixture: ComponentFixture<Child2ModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child2ModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2ModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
