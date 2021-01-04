export class User {
  firstname: string;
  username: string;
  email: string;
  enabled: boolean;
  role: string[];
  company: Company;
  constructor(firstname: string, username: string, email: string, enabled: boolean, company: Company, role: string[]) {
    this.firstname = firstname;
    this.username = username;
    this.email = email;
    this.company = company;
    this.role = role;
    this.enabled = enabled;
  }
}

export class Company {
  companyName: string;
  address: Address;
  products: string[];
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
