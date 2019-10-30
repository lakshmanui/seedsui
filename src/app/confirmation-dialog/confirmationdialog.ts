import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'confirmation-dialog',
    templateUrl: 'confirmation-dialog.html',
  })
  export class ConfirmationDialog {
    
    constructor(
      public dialogRef: MatDialogRef<ConfirmationDialog>,
      private router: Router) {
       }
  
    onRegister(): void {
      this.dialogRef.close();
      this.router.navigate(['/register']);
    }
  
  }