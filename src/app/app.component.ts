import { Component } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'c3a';
  //cursos!:string[];
  cursos = ['Javascript', 'C#']
  addCurso(nombrec:string){
    //alert(nombrec);
    this.cursos.push(String(nombrec));
  }
}
