import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model'
import { EmpleadoService } from '../../services/empleado.service'
@Component({
  selector: 'app-empleado-component',
  templateUrl: './empleado-component.component.html',
  styleUrls: ['./empleado-component.component.css']
})
export class EmpleadoComponentComponent implements OnInit {

  public empleados: Empleado[];
  constructor(private _empleadoService: EmpleadoService) { }


  ngOnInit(): void {
    this.getEmpleados()
  }

  getEmpleados(){
    this._empleadoService.getEmpleado().subscribe(
      res => {
        console.log(res);
        this.empleados = res.empleados;
      }
    )
  }
}
