import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumaEditStateComponent } from './truma-edit-state.component';

describe('TrumaEditStateComponent', () => {
  let component: TrumaEditStateComponent;
  let fixture: ComponentFixture<TrumaEditStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrumaEditStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumaEditStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
