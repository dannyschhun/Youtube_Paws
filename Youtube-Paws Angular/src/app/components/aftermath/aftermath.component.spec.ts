import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AftermathComponent } from './aftermath.component';

describe('AftermathComponent', () => {
  let component: AftermathComponent;
  let fixture: ComponentFixture<AftermathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AftermathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AftermathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
