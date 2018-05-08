import { Component, OnInit } from '@angular/core';
import { PackageService } from '../shared/package.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

 
  constructor(private packageService:PackageService,
              private tostr:ToastrService,
              private db:AngularFireDatabase) { }

  ngOnInit() {
    this.resetForm();
  }

    file = null ;
    
    uploadImage(e){
      this.file = e.target.files[0];

      let storageRef = firebase.storage().ref('/images').child(this.file.name);
      
      let task = storageRef.put(this.file);
      
          task.then((uploadSnapshot:firebase.storage.UploadTaskSnapshot) => {
              console.log("Upload is completed");
              let url = uploadSnapshot.downloadURL;
             /* let img = {}; 
              img = url ;
              this.db.list('packages/'+ packageForm.value.$key + '/img').push(img);
              */
          });

    }


  onSubmit(packageForm: NgForm) {
    if (packageForm.value.$key == null)
      this.packageService.insertPackage(packageForm.value);
    else {
      this.packageService.updatePackage(packageForm.value);
         }
    packageForm.resetForm();
    this.tostr.success('Submitted Succcessfully', 'Package Register');

  }

  
    //Storage reference

  resetForm(packageForm?: NgForm) {
    if (packageForm != null)
    packageForm.reset();
    this.packageService.selectedPackage = {
      $key: null,
      name: '',
      plan: '',
      category: '',
      price: 0,
      img:''
      
    }
  }
 
}