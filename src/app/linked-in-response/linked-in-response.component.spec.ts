import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInResponseComponent } from './linked-in-response.component';

describe('LinkedInResponseComponent', () => {
  let component: LinkedInResponseComponent;
  let fixture: ComponentFixture<LinkedInResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedInResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
