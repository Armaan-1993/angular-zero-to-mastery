import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../model/todo.model';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  list!: ToDo[];
  toDoApi!: string;
  name!: string;
  age!: number;
  userData!: any[];
  constructor(private getData: TodoServiceService) {}

  ngOnInit(): void {
    this.getData.getList().subscribe((data) => {
      console.log(data);
      this.list = data;
    });

    this.userData = [
      {
        name: this.name,
        age: this.age,
      },
    ];
    console.log(this.userData);
  }
  //   nameFunction = (e: any) => {
  //     this.name = e.target.value;
  //   };

  addData = (e: any) => {
    this.name = e.target.value;
  };
}
