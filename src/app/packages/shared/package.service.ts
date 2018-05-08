import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Package } from './package.model';



@Injectable()
export class PackageService {

  PackageList: AngularFireList<any>; 
  selectedPackage: Package = new Package(); 

  constructor(private db:AngularFireDatabase) { }

  getData(){
   this.PackageList = this.db.list('packages');
   return this.PackageList;
  }

  insertPackage( pkg: Package)
  {
    this.PackageList.push({
      name: pkg.name,
      plan: pkg.plan,
      img : pkg.img,
      category : pkg.category,
      price : pkg.price
    });
  }

  updatePackage( pkg: Package)
  {
    this.PackageList.update(pkg.$key,{
      name: pkg.name,
      plan: pkg.plan,
      img : pkg.img,
      category : pkg.category,
      price : pkg.price
    });
  }

  deletePackage($key : string){
    this.PackageList.remove($key);
  }

}
