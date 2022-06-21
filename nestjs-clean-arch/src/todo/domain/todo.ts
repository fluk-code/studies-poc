import { randomUUID } from 'crypto';

export class Todo {
  id: string;
  description: string;
  date = new Date();
  private isDone = false;

  constructor(description: string, id?: string) {
    this.id = id || randomUUID();
    this.description = description;
  }

  done(): void {
    this.isDone = true;
  }
}