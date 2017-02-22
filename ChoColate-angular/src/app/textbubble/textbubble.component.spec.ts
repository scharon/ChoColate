/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextbubbleComponent } from './textbubble.component';

describe('TextbubbleComponent', () => {
  let component: TextbubbleComponent;
  let fixture: ComponentFixture<TextbubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
