import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAddGameComponent } from './second-add-game.component';

describe('SecondAddGameComponent', () => {
  let component: SecondAddGameComponent;
  let fixture: ComponentFixture<SecondAddGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondAddGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAddGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
