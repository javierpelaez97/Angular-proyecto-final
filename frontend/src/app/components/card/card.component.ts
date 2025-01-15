import { Component, Input, OnInit } from '@angular/core';
import { Films } from '../../interfaces/films';
import { FilmService } from '../../services/film.service';
import { Router, RouterOutlet } from '@angular/router';
import { FilmsComponent } from '../../pages/films/films.component';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  {

  @Input() film?: Films

  constructor(private route:Router){}

  navigateToFilm(filmId: any): void{
    this.route.navigate([`films/${filmId}`])
  }
}
