import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss'],
})
export class PaginaComponent implements OnInit {

  characters = []

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(res => {
      this.characters = res.results;
    })
  }



}
