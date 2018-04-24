import { Component, OnInit } from '@angular/core';
import { PackageService } from '../shared/package.service';
import { Package } from '../shared/package.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packageList : Package[];
  constructor(private packageService: PackageService,private tostr:ToastrService) { }

  ngOnInit() {
    var x = this.packageService.getData();
    x.snapshotChanges().subscribe(item => {
      this.packageList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.packageList.push(y as Package);
      });
    });
  }

  onEdit(pkg: Package) {
    this.packageService.selectedPackage = Object.assign({}, pkg);
  }
 
  onDelete($key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.packageService.deletePackage($key);
      this.tostr.warning("Deleted Successfully", "Package register");
    }
  }
 
}

