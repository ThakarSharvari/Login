import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaResponseComponent } from './insta-response.component';

describe('InstaResponseComponent', () => {
  let component: InstaResponseComponent;
  let fixture: ComponentFixture<InstaResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
