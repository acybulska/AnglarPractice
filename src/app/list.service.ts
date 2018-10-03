import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getAuthors() {
    return ["a1","a2","a3"]
    }
}
