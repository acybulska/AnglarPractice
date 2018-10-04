import { Component } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  subtitle = 'List of authors';
  authors;

  post = { title: "Title", isFave: false }

  constructor(service: ListService) {
    this.authors = service.getAuthors();
  }

  onChangedStar(isFave) {
    isFave ? console.log("Like") : console.log("Dislike")
  }
}