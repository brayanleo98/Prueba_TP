import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model'
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  urlApi: String;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.urlApi = "http://localhost:3000/api";
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getEmpleado(): Observable<any> {
    return this.http.get<Empleado>(this.urlApi + '/ver-empleados', { headers: this.headers }).pipe(res => res);
  }

  createEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post<Empleado>(this.urlApi + '/registrar',empleado, { headers: this.headers }).pipe(res => res);
  }
}
