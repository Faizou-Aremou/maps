import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
constructor(){
 this.name = faker.name.fullName();
}

}
