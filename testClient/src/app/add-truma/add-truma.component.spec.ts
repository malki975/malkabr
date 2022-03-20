import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrumaComponent } from './add-truma.component';

describe('AddTrumaComponent', () => {
  let component: AddTrumaComponent;
  let fixture: ComponentFixture<AddTrumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
