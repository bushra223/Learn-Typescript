import Person from "./person.js";
export default class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
