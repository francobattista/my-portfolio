import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAplicationComponent } from './main-aplication.component';

describe('MainAplicationComponent', () => {
  let component: MainAplicationComponent;
  let fixture: ComponentFixture<MainAplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
