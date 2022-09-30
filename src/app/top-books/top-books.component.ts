import { Component, OnInit } from '@angular/core';
import { topBooks} from '../../assets/data/top-books';

@Component({
  selector: 'app-top-books',
  templateUrl: './top-books.component.html',
  styleUrls: ['./top-books.component.css']
})
export class TopBooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataSource = topBooks;
  displayedColumns: string[] = ['name', 'author', 'reads'];
}