/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AendernPasswortComponent } from './aendern-passwort.component';

describe('AendernPasswortComponent', () => {
  let component: AendernPasswortComponent;
  let fixture: ComponentFixture<AendernPasswortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AendernPasswortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AendernPasswortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
