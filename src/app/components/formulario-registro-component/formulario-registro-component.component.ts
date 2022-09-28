import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-registro-component',
  templateUrl: './formulario-registro-component.component.html',
  styleUrls: ['./formulario-registro-component.component.css']
})
export class FormularioRegistroComponentComponent implements OnInit {

  inputName='';
  inputApellidos='';
  inputNIF='';
  inputEmail='';
  inputTelefono='';
  inputSexo='';
  inputConocer='';

  mostrarResultados() {
    console.log('Su nombre es: ' + this.inputName);
    console.log('Su apellido es: ' + this.inputApellidos);
    console.log('Su NIF es: ' + this.inputNIF);
    console.log('Su email es: ' + this.inputEmail);
    console.log('Su teléfono es: ' + this.inputTelefono);
    console.log('Su sexo es: ' + this.inputSexo);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
export class InputErrorsExample {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
