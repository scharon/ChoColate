/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckKlasseComponent } from './check-klasse.component';

describe('CheckKlasseComponent', () => {
  let component: CheckKlasseComponent;
  let fixture: ComponentFixture<CheckKlasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckKlasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckKlasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
