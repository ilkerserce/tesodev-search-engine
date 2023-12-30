import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonComponentComponent } from './primary-button-component.component';

describe('PrimaryButtonComponentComponent', () => {
  let component: PrimaryButtonComponentComponent;
  let fixture: ComponentFixture<PrimaryButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryButtonComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
