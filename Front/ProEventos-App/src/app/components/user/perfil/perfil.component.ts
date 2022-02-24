import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email:['',
      Validators.required, Validators.email],
      telefone: ['', Validators.required],
      function : ['', Validators.required],
      descricao:['', Validators.required],
      senha : ['',
      Validators.required, Validators.minLength(8)],
      confirmarSenha: ['', Validators.required]
    }, formOptions);
  }
      //conviniente para pegar um formfield apenas com a letra F
      get f(): any {return this.form.controls;}

      onSubmit(): void {

        //vai parar aqui se o form estiver inválida
        if (this.form.invalid){
          return;
        }
      }
      public resetform(event: any): void {
        event.preventDefault();
        this.form.reset();
      }
}
