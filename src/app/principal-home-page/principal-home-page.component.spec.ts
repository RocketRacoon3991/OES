import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHomePageComponent } from './principal-home-page.component';

describe('PrincipalHomePageComponent', () => {
  let component: PrincipalHomePageComponent;
  let fixture: ComponentFixture<PrincipalHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
