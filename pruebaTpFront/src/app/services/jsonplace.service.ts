import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/placeholder.model'
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  urlApi: String;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.urlApi = "https://jsonplaceholder.typicode.com";
  }

  getPlaces(): Observable<any> {
    return this.http.get<Place>(this.urlApi + '/posts')
  }


}