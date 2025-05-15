import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTitleButtonComponent } from './change-title-button.component';

describe('ChangeTitleButtonComponent', () => {
  let component: ChangeTitleButtonComponent;
  let fixture: ComponentFixture<ChangeTitleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeTitleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTitleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
