import Person from "./person.js";
export default class Student extends Person {
  private _name: string;
  constructor() {
    super();
    this._name = "";
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}
