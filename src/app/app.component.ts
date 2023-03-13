import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent  {
    myForm: FormGroup;
    
    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({
          name: ['waga', [Validators.required,Validators.maxLength(7)]],
          email: ['a@', [Validators.required, Validators.email]],
        });
      }
      onSubmit() {
        console.log( this.myForm.controls['email'].errors)
        console.log( this.myForm.controls['name'].errors)
        console.log(this.myForm.value);
      }
    
}
