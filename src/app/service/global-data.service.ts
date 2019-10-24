import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Acts as a global data store
 */
export class GlobalDataService {
  userDetails: any;

  constructor(private storageService: StorageService) {
    this.initializeData();
  }

  initializeData() {
    this.userDetails = this.storageService.read('useDetails');
  }


}
