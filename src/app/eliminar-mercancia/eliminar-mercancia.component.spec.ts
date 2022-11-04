import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMercanciaComponent } from './eliminar-mercancia.component';

describe('EliminarMercanciaComponent', () => {
  let component: EliminarMercanciaComponent;
  let fixture: ComponentFixture<EliminarMercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMercanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
