/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { User } from "./user";

const user = new User();
const company = new Company();
//AIzaSyBJTsXVOetOvmaKFB9zNsZR7pgx9d8q9wk
console.log('', user);
console.log('', company);

const mapElement = document.querySelector('#map');
if (isHTMLELement(mapElement)) {
  new google.maps.Map(mapElement, {
    zoom: 1, center: {
      lat: 0,
      lng: 0
    }
  })
}
function isHTMLELement(htmlElement: Element | null): htmlElement is HTMLElement {
  return (htmlElement as HTMLElement) !== null
}

