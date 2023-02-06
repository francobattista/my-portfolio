import { Component } from '@angular/core';

@Component({
  selector: 'app-main-aplication',
  templateUrl: './main-aplication.component.html',
  styleUrls: ['./main-aplication.component.scss']
})
export class MainAplicationComponent {

  languages = [{id:'spanish', icon:''},{id:'english',icon:''}] 

  constructor(){
    
  }
}
