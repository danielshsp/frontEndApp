import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Home} from '../../../@core/dto/general/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gridColumns = 3;
  home: Home;
  listHome: Home[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++ ){
      this.home = new Home();
      this.home.imageName = '../assets/ai.jpg';
      if (i === 0){
        this.home.description = 'The AI module is the util that control about all your monitored params by\n' +
          'machine learning deep learning and other best technologies for take the best decisions for your business.';
        this.home.title = 'AI';
        this.home.subTitle = 'Machine Learning';
      }else if (i === 1){
        this.home.description = 'The IOT module is responsible for system integration\n' +
          'from the fermenters until the software products by different technologies include secure processes that appropriate to pharma company.';
        this.home.title = 'IOT';
        this.home.subTitle = 'SYS-Integration';
      }else if (i === 2){
        this.home.description = 'The web module is the util that allowing explore and show your data\n' +
          'in runtime with the best technologies of web include notification streaming for monitored and explore in real time  your data.';
        this.home.title = 'WEB';
        this.home.subTitle = 'Management';
      }
      this.listHome.push(this.home);

    }

  }

  contact() {
    this.router.navigate(['/general/contact']);
  }

}
