import { Component, OnInit } from '@angular/core';
import { PackageService } from '../shared/package.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

 
  constructor(private packageService:PackageService,private tostr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
 
  onSubmit(packageForm: NgForm) {
    if (packageForm.value.$key == null)
      this.packageService.insertPackage(packageForm.value);
    else
      this.packageService.updatePackage(packageForm.value);
    this.resetForm(packageForm);
    this.tostr.success('Submitted Succcessfully', 'Package Register');
  }
 
  resetForm(packageForm?: NgForm) {
    if (packageForm != null)
    packageForm.reset();
    this.packageService.selectedPackage = {
      $key: null,
      name: '',
      plan: '',
      price: 0
    }
  }
 
}