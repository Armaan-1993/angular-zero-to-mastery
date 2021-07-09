import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  toDoUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private api: HttpClient) {}
  public getList = () => {
    return this.api.get<ToDo[]>(this.toDoUrl);
  };
}
