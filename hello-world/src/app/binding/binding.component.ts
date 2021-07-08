import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  result!: any;
  constructor() {}

  ngOnInit(): void {
    this.result = 'One way binding';
  }
}
