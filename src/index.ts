/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { User } from "./User";

const user = new User();
const company = new Company();
//AIzaSyBJTsXVOetOvmaKFB9zNsZR7pgx9d8q9wk
console.log('', user);
console.log('', company);
const mapElement = document.querySelector('#map');

if (isHTMLELement(mapElement)) { }
function isHTMLELement(htmlElement: Element | null): htmlElement is HTMLElement {
  return (htmlElement as HTMLElement) !== null
}

