import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Subscription } from 'rxjs/Subscription';

import { WeaveService } from '../shared/weave.service'
import { Weave } from '../shared/weave.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  weave = {
    ringGauge: '',
    ringSize: '',
    aspectRatio: ''
  }
  submitted = false;
  weaves: Weave[];
  arMatch: any;
  

  constructor(private weaveService: WeaveService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.searchForm);
    this.submitted = true;
    this.weave.ringGauge = this.searchForm.value.ringGauge;
    this.weave.ringSize = this.searchForm.value.ringSize;
    this.weave.aspectRatio = this.searchForm.value.aspectRatio;
    //search the array using aspectRatio

    this.weaves = this.weaveService.getWeave();

    // this.arMatch = Filter((Weave) => (Weave.aspectRatio === this.weave.aspectRatio) ? true : "Sorry, nothing in the database.");

    // this.arMatch = this.weaves.filter(function(Weave){
    //   if (Weave.aspectRatio == this.weave.aspectRatio){
    //     return true;
    //   } else {
    //     return "Sorry, nothing in the database.";
    //   }
    // });
    // return this.arMatch;

    this.searchForm.reset();

  }

}
