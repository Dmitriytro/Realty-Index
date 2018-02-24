import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLabelComponent } from './navigation-label.component';

describe('NavigationLabelComponent', () => {
  let component: NavigationLabelComponent;
  let fixture: ComponentFixture<NavigationLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
