export class TodoItem {
    constructor(id, text, isChecked = false) {
        this.id = id;
        this.text = text;
        this.isChecked = isChecked;
    }
    toggle() {
        this.isChecked = !this.isChecked;
    }
    toJSON() {
        return {
            id: this.id,
            text: this.text,
            isChecked: this.isChecked
        };
    }
    static create(text) {
        return new TodoItem(crypto.randomUUID(), text, false);
    }
}
