import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidahojeComponent } from './partidahoje.component';

describe('PartidahojeComponent', () => {
  let component: PartidahojeComponent;
  let fixture: ComponentFixture<PartidahojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidahojeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidahojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
