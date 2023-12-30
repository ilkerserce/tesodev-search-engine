import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTestPageComponent } from './screen-test-page.component';

describe('ScreenTestPageComponent', () => {
  let component: ScreenTestPageComponent;
  let fixture: ComponentFixture<ScreenTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenTestPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
