import { Component, OnInit } from '@angular/core';
//Importamos la configuración básica de formularios de Angular
import { FormControl, FormGroup } from '@angular/forms';
//Importamos el servicio (libreriaService)
import { LibreriaService } from 'src/app/services/libreria.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  //Acá declaramos el formulario, indicando los campos que tiene
//Al campo de termino lo dejamos vacío para indicar que de manera predeterminada va a estar vacío
  busquedaForm = new FormGroup({
    termino: new FormControl(),
  });

  //en constructor de declara los servicios
  constructor(
    private libreriaService: LibreriaService
  ) { }

//esto se declara abajo de constructor xq necesita el servicio (que lo importamos arriba y
// lo declaramos en el constructor)
onSubmit () {
  //console.log('Va bien');
  //conseguir el dato de lo qu tipió el usuario
  const { termino } = this.busquedaForm.value;  
  //llamar al servicio y enviarle a la funcion findBooks el termino
  this.libreriaService.findBooks(termino).subscribe(libros => {
    console.log('Resultados', libros);
  });
  
}


  ngOnInit(): void {
  }

}
