import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from "@angular/core";


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should enable and display Home Page', () => {
    expect(component.testComp).toBe("Home");
  });

  it('should allow ASL Today slide view', async() => {
    spyOn(component, 'changeImage');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.changeImage).toHaveBeenCalled();
    })
  });
});
