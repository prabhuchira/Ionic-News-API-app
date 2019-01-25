import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsPage } from './dogs.page';

describe('DogsPage', () => {
  let component: DogsPage;
  let fixture: ComponentFixture<DogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
