import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextboxComponentComponent } from './input-textbox-component.component';

describe('InputTextboxComponentComponent', () => {
  let component: InputTextboxComponentComponent;
  let fixture: ComponentFixture<InputTextboxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextboxComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTextboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
