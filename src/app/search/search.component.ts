import { Component, OnInit } from '@angular/core';
import { Person, SearchService } from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title = 'Search With service or json'; 
  query: string;

  hideDefaultResult = false;
  searchResults: Array<Person>;

  constructor(private searchService: SearchService) {

        this.searchService.getAll().subscribe(
          data => { this.searchResults = data; },
          error => console.log(error)
        );
        
  }

  ngOnInit() {
  }

  /**
   * to get all data from json
   */
  // search(): void {
  //   this.searchService.getAll().subscribe(
  //     data => { this.searchResults = data; },
  //     error => console.log(error)
  //   );
  // }

  /**
   * to get specific data matching with input from json
   */
  search(): void {
    this.searchService.search(this.query).subscribe(
      data => { this.searchResults = data; },
      error => console.log(error)
    );


  }

}
