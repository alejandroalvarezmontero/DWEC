import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlivdarPassComponent } from './olivdar-pass.component';

describe('OlivdarPassComponent', () => {
  let component: OlivdarPassComponent;
  let fixture: ComponentFixture<OlivdarPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlivdarPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlivdarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
