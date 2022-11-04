import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMercanciaComponent } from './buscar-mercancia.component';

describe('BuscarMercanciaComponent', () => {
  let component: BuscarMercanciaComponent;
  let fixture: ComponentFixture<BuscarMercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMercanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
