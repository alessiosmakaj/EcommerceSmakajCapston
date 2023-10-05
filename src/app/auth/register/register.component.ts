import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Dichiarare le variabili necessarie per la registrazione
  name: string= '';
  email: string = '';
  password: string = ''; // Inizializza la proprietà password qui

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // Metodo chiamato quando l'utente effettua la registrazione
  register() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    // Eseguire una richiesta HTTP POST verso la route di registrazione del server Node.js
    this.http.post('http://localhost:4200/register', userData).subscribe((response) => {
      console.log(response); // Gestisci la risposta del server qui
    });
  }
}
