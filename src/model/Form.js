export class Input {
    constructor(type = "", onChange = () => { }, {required, value, id, placeholder, label } = {}) {
        this.type = type;
        this.onChange = onChange;
        this.value = value;
        this.id = id;
        this.placeholder = placeholder;
        this.label = label;
        this.required = required;
        // this. = ;
    }
}
export class Option {
    constructor(name, value, { id = "" } = {}) {
        this.name = name;
        this.value = value;
    }
}
