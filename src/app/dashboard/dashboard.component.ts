import { Component, OnInit } from '@angular/core';
import { PackagesComponent} from '../packages/packages.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openPackage(){
    this.router.navigate(['/packages']);


}

}