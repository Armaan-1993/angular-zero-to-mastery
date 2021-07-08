import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: string = 'Armaaaniiii';
  selectName!: string;
  constructor() {}

  ngOnInit(): void {}

  newChange = (e: any) => {
    this.selectName = e.target.value;
  };
}
