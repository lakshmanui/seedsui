import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RestAPIInvocationService} from '../service/rest-api-invocation.service'
import {SearchDealerRequest} from '../model/search-dealer-request.model'

@Component({
  selector: 'app-ag-seed-finder-search',
  templateUrl: './ag-seed-finder-search.component.html',
  styleUrls: ['./ag-seed-finder-search.component.css']
})
export class AgSeedFinderSearchComponent implements OnInit {
  
  private searchDealerRequest = new  SearchDealerRequest();
  
  

  constructor(private restApiInvocationService : RestAPIInvocationService, public  dialog: MatDialog) { }

  ngOnInit() {

  }

  onSubmit() {
  }

}
