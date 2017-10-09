import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  suggestionForm: FormGroup;

  ngOnInit() {
    this.suggestionForm = new FormGroup({
      'weaveData': new FormGroup({
        'weaveName': new FormControl(null),
        'weavePhoto': new FormControl(null),
        'tutorial': new FormControl(null),
        'ringSizes': new FormArray([])
      })
    });

    this.suggestionForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    this.suggestionForm.setValue({
      'weaveData': {
        'weaveName': 'European 4-in-1',
        'weavePhoto': 'www.test.com',
        'tutorial': 'www.test.com',
        'ringSizes': []
      }
    });

  }

  onSubmit() {
    console.log(this.suggestionForm);
    this.suggestionForm.reset();
  }

  onAddRing() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.suggestionForm.get('ringSizes')).push(control)
  }

}
