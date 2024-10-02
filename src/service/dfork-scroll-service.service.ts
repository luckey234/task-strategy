import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const url = 'https://raw.githubusercontent.com/cheeaun/repokemon/master/data/pokemon-list.json';


@Injectable({
  providedIn: 'root'
})
export class DforkScrollServiceService {

  constructor(private http: HttpClient) { }

  fetchPokemons(): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(
      delay(1000), // Simulate network delay
      map((data) => data.slice(0, 10000)) // Limit to 10,000 items
    );
  }
}
