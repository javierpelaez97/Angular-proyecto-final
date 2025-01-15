import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmData } from '../interfaces/dto/film-data';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  url : string = "http://localhost:3000/api/films"

  constructor(private http:HttpClient, private cookies: CookieService) { }
  /* Hace una peticion en la base de datos y devuelce un token que genera al estar logeados y podemos ver todas las peliculas */
  findAll(){
    return this.http.get(`${this.url}?token=${this.cookies.get('token')}`) //Rescatamos el cookie service
  }
  
  insert(data: FilmData){
   return this.http.post(`${this.url}?token=${this.cookies.get('token')}`,data)
  }
  //Le pedimos borrar la url/id?token que le hemos pasado de la cookie 
  deleteOne(id: string){
    return this.http.delete(`${this.url}/${id}?token=${this.cookies.get('token')}`)
  }
}
