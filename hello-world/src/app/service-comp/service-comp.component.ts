import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MathServiceService } from '../math-service.service';

@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html',
  styleUrls: ['./service-comp.component.css'],
})
export class ServiceCompComponent implements OnInit {
  displayUsers!: any;
  constructor(private getService: MathServiceService) {}

  ngOnInit(): void {
    this.getService.GetData().subscribe((users) => {
      this.displayUsers = users;
    });
  }
}
