import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnComponent } from './learn.component';

describe('LearnComponent', () => {
  let component: LearnComponent;
  let fixture: ComponentFixture<LearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Display English-ASL Translation Images', () => {
    expect(component.testComp).toBe("Learn");
  });

  it('should enable random sign learning', async() => {
    spyOn(component, 'changeImage');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.changeImage).toHaveBeenCalled();
    })
  });

  it('should have fixed dictionary of signs  ', () => {
    expect(component.signLib[0]).toContain("again");
  });
});
