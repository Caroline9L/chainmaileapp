import { Router, Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgForm } from '@angular/forms';
// import { Subscription } from 'rxjs/Subscription';

import { WeaveService } from '../shared/weave.service'
import { Weave } from '../shared/weave.model';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  @ViewChild('f') suggestionForm: NgForm;
  weave = {
    weaveName: '',
    weaveDescription: '',
    imagePath: '',
    tutorial: '',
    ringGauge: '',
    ringSize: '',
    aspectRatio: ''
  }
  // aspectRatio: number;
  submitted = false;
  id: number;
  // ringDiameter: number;
  // private subscription: Subscription;
  weaves: Weave[];

  constructor(private weaveService: WeaveService,
              private router: Router, 
              private route: ActivatedRoute) { }
  //function to convert the decimal to a fraction
  ngOnInit() {
    // this.subscription = this.weaveService.getWeave 
    //     .subscribe(
    //       (weaves: Weave[]) => {
    //         this.weaves = this.weaveService.getWeaves(this.id);
    //       }
    //     );
    }

  // function getRingDiameter() {
  //   // return this.suggestionForm.value.ringGauge
  //   this.ringDiameter = 0.005(92 ** ((36 - this.ringGauge) / 39));
  //   return this.ringDiameter;
  // }




  onSubmit() {
    console.log(this.suggestionForm);
    this.submitted = true;

    const newWeave = new Weave(
      this.suggestionForm.value['name'],
      this.suggestionForm.value['imagePath'],
      this.suggestionForm.value['description'],
      this.suggestionForm.value['tutorial'],
      this.suggestionForm.value['ringGauge'],
      this.suggestionForm.value['ringSize'],
      this.suggestionForm.value['aspectRatio'],
    ); 
    this.weaveService.addWeave(newWeave)



    this.weave.weaveName = this.suggestionForm.value.weaveName;
    this.weave.weaveDescription = this.suggestionForm.value.weaveDescription;
    this.weave.tutorial = this.suggestionForm.value.tutorial;
    this.weave.ringGauge = this.suggestionForm.value.ringGauge;
    this.weave.ringSize = this.suggestionForm.value.ringSize;
    this.weave.aspectRatio = this.suggestionForm.value.aspectRatio;

    this.suggestionForm.reset();
  }


}
