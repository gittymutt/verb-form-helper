import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBeComponent } from './show-be.component';

describe('ShowBeComponent', () => {
  let component: ShowBeComponent;
  let fixture: ComponentFixture<ShowBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
