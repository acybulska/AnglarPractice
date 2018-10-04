import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() isFavourite: boolean;
  @Output() change = new EventEmitter();
  likesCounter = 0;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit(this.isFavourite);
    this.isFavourite === true ? this.likesCounter++ : this.likesCounter--
  }
}
