import { Todo } from '../domain/todo';

export interface CreateTodoParamsDTO {
  description: string;
}

export class CreateTodoUseCase {
  execute(params: CreateTodoParamsDTO): string {
    const todo = new Todo(params.description);
    console.log(`Created Todo ${todo.id}`);

    return todo.id;
  }
}
