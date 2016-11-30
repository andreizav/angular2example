/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WotComponent } from './wot.component';

describe('WotComponent', () => {
  let component: WotComponent;
  let fixture: ComponentFixture<WotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
