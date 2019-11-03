import { Component } from '@angular/core';

import {MatDialog,MatDialogConfig, MatDialogRef} from '@angular/material';
import {RestAPIInvocationService} from '../service/rest-api-invocation.service'
import {SearchDealerRequestForm} from '../model/search-dealer-request-form.model'
import {SearchDealerRequest} from '../model/search-dealer-request.model';
import { DealerResponse } from '../model/dealer-response.model';
import {ConfirmationDialog} from '../confirmation-dialog/confirmationdialog';

@Component({
  selector: 'app-ag-seed-finder-search',
  templateUrl: './ag-seed-finder-search.component.html',
  styleUrls: ['./ag-seed-finder-search.component.css']
})
export class AgSeedFinderSearchComponent {
  
  private searchDealerRequestForm : SearchDealerRequestForm;
  private searchDealerRequest : SearchDealerRequest;
  private dealerResult : DealerResponse[];
  private displayedColumns: String[] = ['dealerTitle', 'contactPerson', 'contactNumber'];
  
  constructor(private restApiInvocationService : RestAPIInvocationService, public  dialog: MatDialog) {
    this.searchDealerRequestForm = new SearchDealerRequestForm();
   }


  onSubmit() {
    
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

    this.restApiInvocationService.postRequest(false, "/search/dealer",this.searchDealerRequest)
    .subscribe( response => this.dealerResult=response.data);
  }

  onGetQuote(){
    this.dialog.open(ConfirmationDialog);
  }

}
