export class User {
  firstname: string;
  username: string;
  email: string;
  role: string[];
  password: string;
  constructor(firstname: string, username: string, email: string, password: string, role: string[]) {
    this.firstname = firstname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
