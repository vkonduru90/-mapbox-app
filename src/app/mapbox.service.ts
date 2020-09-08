import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  getMarkers() {
    const geoJson = [{
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': ['101.686100', '3.139000']
      },
      'properties': {
        'message': 'kuala lumpur'
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': ['77.1025', '28.7041']
      },
      'properties': {
        'message': 'Delhiiiiiii'
      }
    }];
    return geoJson;
  }
}