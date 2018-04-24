/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackageComponent } from './package.component';

describe('PackageComponent', () => {
  let component: PackageComponent;
  let fixture: ComponentFixture<PackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
