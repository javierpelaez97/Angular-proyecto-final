import { Component, OnInit } from '@angular/core';
import { Films } from '../../interfaces/films';
import { FilmService } from '../../services/film.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-films',
  imports: [CardComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit {
  films : Films [] = []

  constructor(private filmService: FilmService){
    
  }

  ngOnInit(): void {
    this.filmService.findAll().subscribe({
      next: (res:any) =>{
        this.films = res as Films[]
        console.log(res)
        
      },
      error:(err)=> console.log(err)
      
    })
  }
}
