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
}

