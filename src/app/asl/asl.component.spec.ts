import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ASLComponent } from './asl.component';

describe('ASLComponent', () => {
  let component: ASLComponent;
  let fixture: ComponentFixture<ASLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ASLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Display Translation Page', () => {
    expect(component.testComp).toBe("ASL");
  });
});
