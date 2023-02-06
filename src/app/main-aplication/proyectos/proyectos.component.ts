import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit{

  repos:any= [];
  constructor(private generalSvc: GeneralService){

  }

  ngOnInit(){
    this.generalSvc.getRepositories().subscribe((r) => {
      this.repos = r;     
      console.log(r);
      
    })
  }

}
