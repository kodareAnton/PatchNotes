import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diablo4Component } from './diablo4.component';

describe('Diablo4Component', () => {
  let component: Diablo4Component;
  let fixture: ComponentFixture<Diablo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Diablo4Component]
    });
    fixture = TestBed.createComponent(Diablo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
