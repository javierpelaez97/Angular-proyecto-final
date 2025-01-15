import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserRegisterData } from '../../../interfaces/dto/user-register-data';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  registerForm: FormGroup


  constructor(private formBuilder: FormBuilder,
     private userService: UserService,
     private router: Router
    ){

    this.registerForm = this.formBuilder.group({
      "email": new FormControl(null,[Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      "password": new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9]+[a-zA-Z0-9]{7,}$')]),
      "name": new FormControl(null,[Validators.required])
    })
  }

  doRegister(){
    const data : UserRegisterData = {
      email: this.registerForm.get("email")?.value,
      password: this.registerForm.get("password")?.value,
      name: this.registerForm.get("name")?.value
    }
    this.userService.register(data).subscribe({
      next:(res: any) => {
        alert('Registro completado')
        this.router.navigate(['/login'])

      },
      error:(err) => console.log(err)
      
    })
  }
}
