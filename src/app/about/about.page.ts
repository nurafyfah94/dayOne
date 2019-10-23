import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  //constructor() { }
  constructor(private NavCtrl:NavController,private route: ActivatedRoute) {
  
  }

  ngOnInit() {
  }

  submit(){

    console.log("Button ok");

this.NavCtrl.navigateBack('home');

}
}
