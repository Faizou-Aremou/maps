/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
const company = new Company();
console.log('', user);
console.log('', company);
const mapElement = document.querySelector('#map');
const marketPopupContent = 'Hi there'
if (isHTMLELement(mapElement)) {
  const map = new CustomMap(mapElement)
  map.addMaker({...user, markerContent:marketPopupContent});
  map.addMaker({...company, markerContent:marketPopupContent});
}

function isHTMLELement(htmlElement: Element | null): htmlElement is HTMLElement {
  return (htmlElement as HTMLElement) !== null
}

