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
      'geometry': {
        'coordinates': ['101.686100', '3.139000']
      },
      'properties': {
        'message': 'kuala lumpur',
        'description':
          '<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
      }
    }, {
      'geometry': {
        'coordinates': ['77.1025', '28.7041']
      },
      'properties': {
        'message': 'Delhiiiiiii',
        'description':
          '<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
      }
    }];
    return geoJson;
  }
}