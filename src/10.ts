export class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _password: string;
  private _isAdmin: boolean;
  
  constructor(id: number, name: string, email: string, password: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._isAdmin = false;
  }
  
  public get id(): number {
    return this._id;
  }
  
  public set id(value: number) {
    this._id = value;
  }
  
  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    this._name = value;
  }
  
  public get email(): string {
    return this._email;
  }
  
  public set email(value: string) {
    this._email = value;
  }
  
  public get password(): string {
    return this._password;
  }
  
  public set password(value: string) {
    this._password = value;
  }
  
  public isAdmin(): boolean {
    return this._isAdmin;
  }
}
