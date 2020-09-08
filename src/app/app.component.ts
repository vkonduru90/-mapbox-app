import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {MapboxService} from './mapbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mapbox-app';
  map: mapboxgl.Map;
  style = 'mapbox://styles/manjula1901/cketovniv4bbn19p31fgnc6i2';
  lat = 13.0569951;
  lng = 80.20929129999999;
  message = 'Hello World!';
  markers: any;
  constructor(private mapboxService: MapboxService) {}

  ngOnInit() {
    if (!mapboxgl.supported()) {
      alert('Your Browser dose not support Mapbox GL');
    }
    else {
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
      const nav = new mapboxgl.NavigationControl();
      this.map.addControl(nav, 'bottom-right');
      this.markers = this.mapboxService.getMarkers();

      // const LngLat = [[77.1025, 28.7041], [78.4867, 17.3850], [77.5946, 12.9716]];
      // LngLat.forEach(lnglat => {
      //   this.createMarker(lnglat[0], lnglat[1]);
      // });
      this.createMarker();
    }
  }

  createMarker() {
    this.markers.forEach(marker => {

      new mapboxgl.Marker({color: 'red'}).setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(marker.properties.description))
        .addTo(this.map);
    });
  }
}
