import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicePagePage } from './advice-page.page';

describe('AdvicePagePage', () => {
  let component: AdvicePagePage;
  let fixture: ComponentFixture<AdvicePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvicePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvicePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
