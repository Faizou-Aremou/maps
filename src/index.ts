/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
const company = new Company();
console.log('', user);
console.log('', company);
const mapElement = document.querySelector('#map');

if (isHTMLELement(mapElement)) {
  const map = new CustomMap(mapElement)
  map.addMaker({ ...user, markerContent: user.name });
  map.addMaker({
    ...company, markerContent: `<div> <h1>Company Name:${company.catchPhrase}</h1>
  <h3>Catchphrase: ${company.catchPhrase} </h3> </div>`
  });
}

function isHTMLELement(htmlElement: Element | null): htmlElement is HTMLElement {
  return (htmlElement as HTMLElement) !== null
}

