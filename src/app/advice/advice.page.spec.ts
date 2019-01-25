import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicePage } from './advice.page';

describe('AdvicePage', () => {
  let component: AdvicePage;
  let fixture: ComponentFixture<AdvicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
