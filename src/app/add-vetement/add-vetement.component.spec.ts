import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVetementComponent } from './add-vetement.component';

describe('AddVetementComponent', () => {
  let component: AddVetementComponent;
  let fixture: ComponentFixture<AddVetementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVetementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
