import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarProyectoComponent } from './agregar-editar-proyecto.component';

describe('AgregarEditarProyectoComponent', () => {
  let component: AgregarEditarProyectoComponent;
  let fixture: ComponentFixture<AgregarEditarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
