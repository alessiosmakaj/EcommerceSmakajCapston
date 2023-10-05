import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

  //registration model
  registerForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9]*')]]

  })

  ngOnInit(): void {
  }
   
  register() {
    if (this.registerForm.valid) {
      console.log('Form is valid'); // Controlla se il form è considerato valido
  
      let name = this.registerForm.value.name;
      let email = this.registerForm.value.email;
      let password = this.registerForm.value.password;
  
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
  
      this.ds.register(name, email, password)
        .subscribe(
          (result: any) => {
            alert(result.message);
            this.router.navigateByUrl('/'); // Utilizza '/' invece di ''
  
            // Puoi anche reimpostare il form dopo una registrazione riuscita se lo desideri
            this.registerForm.reset();
          },
          (error) => {
            alert(error.error.message);
          }
        );
    } else {
      console.log('Form is not valid'); // Verifica se il form è considerato non valido
    }
  }
  
  redirectToHome() {
    this.router.navigateByUrl('/');
  }


}