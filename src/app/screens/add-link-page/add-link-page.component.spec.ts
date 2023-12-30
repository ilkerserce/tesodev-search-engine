import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinkPageComponent } from './add-link-page.component';

describe('AddLinkPageComponent', () => {
  let component: AddLinkPageComponent;
  let fixture: ComponentFixture<AddLinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLinkPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
