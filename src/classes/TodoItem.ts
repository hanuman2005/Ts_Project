export class TodoItem {
  constructor(
    public id: string,
    public text: string,
    public isChecked: boolean = false
  ) {}

  toggle(): void {
    this.isChecked = !this.isChecked;
  }

  toJSON(): { id: string; text: string; isChecked: boolean } {
    return {
      id: this.id,
      text: this.text,
      isChecked: this.isChecked
    };
  }

  static create(text: string): TodoItem {
    return new TodoItem(crypto.randomUUID(), text, false);
  }
}
