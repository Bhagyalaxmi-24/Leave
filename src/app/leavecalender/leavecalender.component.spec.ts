import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavecalenderComponent } from './leavecalender.component';

describe('LeavecalenderComponent', () => {
  let component: LeavecalenderComponent;
  let fixture: ComponentFixture<LeavecalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeavecalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavecalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
