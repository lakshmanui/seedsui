import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { from } from "rxjs";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AGSeedTrialsComponent } from "./ag-seed-trials/ag-seed-trials.component";
import { AGSeedFinderComponent } from './ag-seed-finder/ag-seed-finder.component';
import { AGSeedQuoteComponent } from './ag-seed-quote/ag-seed-quote.component';
import { SeedDealersAndRepsComponent } from './seed-dealers-and-reps/seed-dealers-and-reps.component';
import { SeedCompaniesAndRepsComponent } from './seed-companies-and-reps/seed-companies-and-reps.component';
import { CropInsuranceComponent } from './crop-insurance/crop-insurance.component';
import { FarmAndCropLoansComponent } from './farm-and-crop-loans/farm-and-crop-loans.component';
import { AGAssociationsComponent } from './ag-associations/ag-associations.component';
import { AGNewsComponent } from './ag-news/ag-news.component';
import { AGFarmBlogComponent } from './ag-farm-blog/ag-farm-blog.component'

const routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "ag-seed-trials",
    component: AGSeedTrialsComponent
  },
  {
    path: "ag-seed-finder",
    component: AGSeedFinderComponent
  },
  {
    path: "ag-seed-quote",
    component: AGSeedQuoteComponent
  },
  {
    path: "seed-dealers-and-reps",
    component: SeedDealersAndRepsComponent
  },
  {
    path: "seed-companies-and-reps",
    component: SeedCompaniesAndRepsComponent
  },
  {
    path: "crop-insurance",
    component: CropInsuranceComponent
  },
  {
    path: "farm-and-crop-loans",
    component: FarmAndCropLoansComponent
  },
  {
    path: "ag-associations",
    component: AGAssociationsComponent
  },
  {
    path: "ag-news",
    component: AGNewsComponent
  },
  {
    path: "ag-farm-blog",
    component: AGFarmBlogComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, HomeComponent, HeaderComponent, 
                 AGSeedTrialsComponent, AGSeedFinderComponent, AGSeedQuoteComponent,
                 SeedDealersAndRepsComponent, SeedCompaniesAndRepsComponent,
                 CropInsuranceComponent, FarmAndCropLoansComponent ,
                 AGAssociationsComponent, AGNewsComponent, AGFarmBlogComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
