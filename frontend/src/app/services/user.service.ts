import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginData } from '../interfaces/dto/user-login-data';
import { UserRegisterData } from '../interfaces/dto/user-register-data';
import { CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url: string = "http://localhost:3000/api/users"


  constructor(private http:HttpClient, private cookies : CookieService ) { 

  }

  login(data:UserLoginData){   //Nos viene desde el interface dto
      return this.http.post(`${this.url}/login`, data )
  }
  register(data: UserRegisterData ){
      return this.http.post(`${this.url}/register`, data)
  }
  //Para asignar un token a una cookie
  setToken(token : string ){
    this.cookies.set('token', token)
  }
  //para eliminar la cookie
  logOut(){
    this.cookies.delete('token')
  }
}
