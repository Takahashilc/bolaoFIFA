import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProibidoComponent } from './proibido.component';

describe('ProibidoComponent', () => {
  let component: ProibidoComponent;
  let fixture: ComponentFixture<ProibidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProibidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProibidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
