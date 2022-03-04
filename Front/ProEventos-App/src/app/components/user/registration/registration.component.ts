import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from './../../../helpers/ValidatorField';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder) { }

  get f(): any{return this.form.controls; }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {

      const formOptions: AbstractControlOptions = {
        validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
      };

    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['',
      Validators.required, Validators.email],
      usuario: ['', Validators.required],
      senha: ['',
       Validators.required, Validators.minLength(8)],
      confirmaSenha: ['', Validators.required],
      Aregistro: ['', Validators.required],
      registrado: ['', Validators.required]
    }, formOptions);
  }
  public cssValidator(campoForm : FormControl): any {
    return {'is-invalid': campoForm.errors && campoForm.touched};
  }
}
