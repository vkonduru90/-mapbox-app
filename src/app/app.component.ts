import {Component} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {MapboxService} from './mapbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapbox-app';
  map: mapboxgl.Map;
  style = 'mapbox://styles/manjula1901/ckeqy42x66mf419lqyeojq35f';
  lat = 13.0569951;
  lng = 80.20929129999999;
  message = 'Hello World!';
  markers: any;
  constructor(private mapboxService: MapboxService) {}

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat],
        });
      });
    }
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [this.lng, this.lat],
      zoom: 9
    });

    this.map.on('load', () => {

      this.map.addSource('customMarker', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      this.markers = this.mapboxService.getMarkers();
      const data = {
        type: 'FeatureCollection',
        features: this.markers
      };
      this.map.getSource('customMarker').setData(data);

      this.map.addLayer({
        id: 'customMarketid',
        source: 'customMarker',
        type: 'symbol',
        layout: {
          'text-field': '{message}',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'marker-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      });
    });
  }


}
