import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSeedFinderSearchComponent } from './ag-seed-finder-search.component';

describe('AgSeedFinderSearchComponent', () => {
  let component: AgSeedFinderSearchComponent;
  let fixture: ComponentFixture<AgSeedFinderSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgSeedFinderSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSeedFinderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
