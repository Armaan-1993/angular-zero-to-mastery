import { Component, OnInit } from '@angular/core';

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
  //   name!: string;
  //   age!: number;
  userData: any = [];
  data: any = {};
  name!: any;
  age!: any;
  constructor(private getData: TodoServiceService) {}

  ngOnInit(): void {
    this.getData.getList().subscribe((data) => {
      console.log(data);
      this.list = data;
    });

    console.log(this.userData);
  }
  //   nameFunction = (e: any) => {
  //     this.name = e.target.value;
  //   };

  addData = () => {
    this.userData.push(this.data);
    this.data = {};
  };

  deleteData = (start: any) => {
    console.log(start);
    this.userData.splice(start, 1);
  };
}
