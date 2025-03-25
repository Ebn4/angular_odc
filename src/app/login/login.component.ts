import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email!: string;
  mot_de_passe! : string;

  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmitForm(){
    console.log(this.email);
    console.log(this.mot_de_passe);
  }
}
