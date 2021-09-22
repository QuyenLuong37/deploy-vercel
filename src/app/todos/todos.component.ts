import { TodosService } from './todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getAll();
  }

}
