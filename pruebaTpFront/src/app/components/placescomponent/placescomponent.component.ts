import { Component, OnInit } from '@angular/core';
import { Place } from '../../models/placeholder.model'
import { PlaceService } from '../../services/jsonplace.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-placescomponent',
  templateUrl: './placescomponent.component.html',
  styleUrls: ['./placescomponent.component.css']
})
export class PlacescomponentComponent implements OnInit {

  public places: Place[];
  constructor(private _placeService: PlaceService) { }


  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces() {
    this._placeService.getPlaces().subscribe(
      res => {
        this.places = res;
      }
    )
  }
}
