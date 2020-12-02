import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASLComponent } from './asl.component';

describe('ASLComponent', () => {
  let component: ASLComponent;
  let fixture: ComponentFixture<ASLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
