import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumotListComponent } from './trumot-list.component';

describe('TrumotListComponent', () => {
  let component: TrumotListComponent;
  let fixture: ComponentFixture<TrumotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrumotListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
