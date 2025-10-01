import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Credenciais } from '../../models/credenciais';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms'; // Importações adicionadas

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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

  constructor(private toastr: ToastrService) {}

  // Método para validar quando os formulários estiverem prontos
  validaCampos(email: any, senha: any): boolean {
    return email.valid && senha.valid;
  }

  logar(email: any, senha: any) {
    if (this.validaCampos(email, senha)) {
      this.toastr.error('Usuário e/ou senha inválidos', 'Erro');
      this.creds.senha = '';
    }
  }
}