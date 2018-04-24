import { Component, OnInit } from '@angular/core';

import { PackageService } from './shared/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private PkgService:PackageService) { }

  ngOnInit() {
  }

}
