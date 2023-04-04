import { Component } from '@angular/core';

@Component({
  selector: 'app-purepipes',
  templateUrl: './purepipes.component.html',
  styleUrls: ['./purepipes.component.scss']
})
export class PurepipesComponent {

  name = 'Bharath is a good boy'
  today = new Date()

  constructor(){}

  results = [
    {id: 1,summary: 'These are the results for the searched text'},
    {id: 2,summary: 'Here are some more results you searched for'},
    {id: 3,summary: 'Searching for answers, are we'},
    {id: 4,summary: 'What more could you ask for?'}
  ];

  searchTerm!: string;

  updateSearch(e:any) {
    this.searchTerm = e.target.value
    console.log("e: ",e);

  }
}
