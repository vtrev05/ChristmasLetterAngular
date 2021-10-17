import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSonComponent } from './third-son.component';

describe('ThirdSonComponent', () => {
  let component: ThirdSonComponent;
  let fixture: ComponentFixture<ThirdSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
