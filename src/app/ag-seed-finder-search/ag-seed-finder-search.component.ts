import { Component, OnInit } from '@angular/core';

import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RestAPIInvocationService} from '../service/rest-api-invocation.service'
import {SearchDealerRequestForm} from '../model/search-dealer-request-form.model'
import {SearchDealerRequest} from '../model/search-dealer-request.model';


@Component({
  selector: 'app-ag-seed-finder-search',
  templateUrl: './ag-seed-finder-search.component.html',
  styleUrls: ['./ag-seed-finder-search.component.css']
})
export class AgSeedFinderSearchComponent implements OnInit {
  
  private searchDealerRequestForm : SearchDealerRequestForm;
  private searchDealerRequest : SearchDealerRequest;
  
  constructor(private restApiInvocationService : RestAPIInvocationService, public  dialog: MatDialog) {
    this.searchDealerRequestForm = new SearchDealerRequestForm();

   }


  ngOnInit() {
    
  }

  onSubmit() {
    console.log("Received "+this.searchDealerRequestForm);
    this.searchDealerRequest = new SearchDealerRequest();
    this.searchDealerRequest.county=this.searchDealerRequestForm.county;
    this.searchDealerRequest.state=this.searchDealerRequestForm.state;
    this.searchDealerRequest.crops = new Array();
    if(this.searchDealerRequestForm.cropAll){
      this.searchDealerRequest.crops.push('ALL');
    }

    if(this.searchDealerRequestForm.cropCorn){
      this.searchDealerRequest.crops.push('Corn');
    }
    if(this.searchDealerRequestForm.cropCotton){
      this.searchDealerRequest.crops.push('Cotton');
    }
    if(this.searchDealerRequestForm.cropWheat){
      this.searchDealerRequest.crops.push('Wheat');
    }
    if(this.searchDealerRequestForm.cropSoyaBean){
      this.searchDealerRequest.crops.push('SoyaBean');
    }

    this.restApiInvocationService.postRequest(false, "/search/dealer",this.searchDealerRequest);
    
  }

}
