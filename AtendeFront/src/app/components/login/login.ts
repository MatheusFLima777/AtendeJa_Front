import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Credenciais } from '../../models/credenciais';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  creds: Credenciais = {
    email: '',
    senha: ''
  };

  constructor() {}

  // Retorna true se o formulário for válido
  validaCampos(form: NgForm): boolean {
    console.log(form.valid ? 'Credenciais:' : 'Formulário inválido', this.creds);
    return !!form.valid; // converte null em false
  }

  // Ação do login
  login(form: NgForm) {
    if (form.valid) {
      console.log('Login realizado com sucesso:', this.creds);
      // Aqui você pode chamar seu serviço de autenticação
    } else {
      console.log('Formulário inválido');
    }
  }
}
