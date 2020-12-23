export class JwtResponse {
  token: string;
  sub: string;
  company: string;
  products: string[];
  role: string[];
  constructor(token: string, sub: string, company: string, products: string[], role: string[]) {
    this.token = token;
    this.sub = sub;
    this.company = company;
    this.products = products;
    this.role = role;
  }
}
