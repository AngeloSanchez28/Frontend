import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInformacionComponent } from './main-informacion.component';

describe('MainInformacionComponent', () => {
  let component: MainInformacionComponent;
  let fixture: ComponentFixture<MainInformacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainInformacionComponent]
    });
    fixture = TestBed.createComponent(MainInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
