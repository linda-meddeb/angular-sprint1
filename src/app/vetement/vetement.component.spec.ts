import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetementComponent } from './vetement.component';

describe('VetementComponent', () => {
  let component: VetementComponent;
  let fixture: ComponentFixture<VetementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
