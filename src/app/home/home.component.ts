import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../_services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(public store:StoreService, public router: Router) { }

  ngOnInit(): void {
  }

  goToPreview(){
    this.router.navigate(['preview']);
  }

}
