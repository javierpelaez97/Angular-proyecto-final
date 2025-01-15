import { Component } from '@angular/core';

import{ FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms'
import { UserLoginData } from '../../../interfaces/dto/user-login-data';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-forms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-forms.component.html',
  styleUrl: './login-forms.component.css'
})
export class LoginFormsComponent {
  hidePassword: boolean = true

  loginForm: FormGroup 
  constructor(private formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router
  ){
    
    this. loginForm = this.formBuilder.group({
      "email": new FormControl(null, [Validators.required, Validators.email] ),
      "password" : new FormControl(null, [Validators.required])
    })
  }

  doLogin(){
    const data : UserLoginData = {
      email: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value
    }
    this.userService.login(data).subscribe({
      next: (res: any) =>{ 
        this.userService.setToken(res.token),
        this.router.navigate(['/films'])
      },
      error: (err) => console.log(err),
    })
    
  }
  
}
