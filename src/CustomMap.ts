import { Mappable } from "./mappable";


export class CustomMap {
  private googleMaps: google.maps.Map;

  constructor(htmlElement: HTMLElement) {
    this.googleMaps = new google.maps.Map(htmlElement, {
      zoom: 1, center: {
        lat: 0,
        lng: 0
      }
    })
  }
  addMaker<T extends Mappable>(mappable: T) {
    const marker = new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({ content: mappable.markerContent });
      infoWindow.open(this.googleMaps, marker);
    }
    )
  }
}

