/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ErsteSeiteComponent } from './erste-seite.component';

describe('ErsteSeiteComponent', () => {
  let component: ErsteSeiteComponent;
  let fixture: ComponentFixture<ErsteSeiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErsteSeiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErsteSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
