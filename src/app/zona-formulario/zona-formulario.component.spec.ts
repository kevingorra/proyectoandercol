import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaFormularioComponent } from './zona-formulario.component';

describe('ZonaFormularioComponent', () => {
  let component: ZonaFormularioComponent;
  let fixture: ComponentFixture<ZonaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
