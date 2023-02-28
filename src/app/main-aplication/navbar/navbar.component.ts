import { Component } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  languages = [{id:'spanish', icon:''},{id:'english',icon:''}]

  constructor(public generalService : GeneralService) {
    //this.changeTheme();
  }

  changeLanguage(){
    
    if(document.body.classList.contains('spanish'))
    {
      document.body.classList.remove('spanish')
      document.body.classList.add('english')
    }
    else
    {
      document.body.classList.remove('english')
      document.body.classList.add('spanish')
    }
  }

  changeTheme(){
    if(document.body.classList.contains('dark-theme'))
    {
      document.body.classList.remove('dark-theme')
      document.body.classList.add('light-theme')
      this.generalService.setApplicationTheme('light');

    }
    else
    {
      document.body.classList.remove('light-theme')
      document.body.classList.add('dark-theme')
      this.generalService.setApplicationTheme('dark');
    }

  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

}
