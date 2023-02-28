import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit{

  repos:any= [];

  repoIcons = [{name:'my-portfolio', icon:'../../../assets/imgs/my-portfolio.png'},{name:'AntipanicButton', icon:'../../../assets/imgs/my-portfolio.png'},{name:'francobattista', icon:'../../../assets/imgs/my-portfolio.png'},
  {name:'Proyectos', icon:'../../../assets/imgs/my-portfolio.png'},{name:'SistemaTurnos', icon:'../../../assets/imgs/my-portfolio.png'}, {name:'backend_auth_mySql', icon:'../../../assets/imgs/my-portfolio.png'}]
  constructor(private generalSvc: GeneralService){

  }

  ngOnInit(){
    this.generalSvc.getRepositories().subscribe((r) => {
      this.repos = r;     
      console.log(r);
      
      /*this.repos.forEach((element:any) => {
        this.generalSvc.getOneRepository(element.full_name).subscribe((repo)=>{
          //console.log(repo);
        });
      });*/
    })
  }

  getIcon(item :string){
    console.log(item);
    
    return this.repoIcons.find((elem) => {return elem.name == item});
  }

}
