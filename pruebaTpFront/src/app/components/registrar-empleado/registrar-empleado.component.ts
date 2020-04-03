import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model'
import { EmpleadoService } from '../../services/empleado.service'

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  public empleado: Empleado;
  constructor(private _empleadoService: EmpleadoService) { 
    this.empleado = new Empleado();
  }

  ngOnInit(): void {
  }

  createStudent(){
    this._empleadoService.createEmpleado(this.empleado).subscribe(
      res => {
        console.log(res);
        alert('Se agrego el empleado correctamente')
      },
      error =>{
        console.log(error);
        alert('Error al agregar el empleado')
      }
    )
  }
}
