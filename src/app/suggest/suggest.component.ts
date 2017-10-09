import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent {
  @ViewChild('f') suggestionForm: NgForm;
  weave = {
    weaveName: '',
    weavePhoto: '',
    tutorial: '',
    ringGauge: '',
    ringSize: ''
  }
  submitted = false;

  //function to convert the decimal to a fraction

  onSubmit() {
    console.log(this.suggestionForm);
    this.submitted = true;
    this.weave.weaveName = this.suggestionForm.value.weaveName;
    this.weave.weavePhoto = this.suggestionForm.value.weavePhoto;
    this.weave.tutorial = this.suggestionForm.value.tutorial;
    this.weave.ringGauge = this.suggestionForm.value.ringGauge;
    this.weave.ringSize = this.suggestionForm.value.ringSize;
    this.suggestionForm.reset();
  }

}
