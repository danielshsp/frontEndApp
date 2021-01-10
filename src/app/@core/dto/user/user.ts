export class User {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  enabled: boolean;
  role: string[];
  company: Company;
  constructor(firstname: string, lastname: string, username: string, email: string, enabled: boolean, company: Company, role: string[]) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.company = company;
    this.role = role;
    this.enabled = enabled;
  }
}

export class Company {
  name: string;
  address: Address;
  product: string[];
  constructor(){
  }
}

export class Address {
  address: string;
  phone: string;
  country: string;
  city: string;
  constructor(){
  }

}
