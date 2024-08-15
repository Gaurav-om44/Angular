import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export class CustomerComponent {
  name = new FormControl('');
}




@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
})
export class CustomerFormComponent {
  onSubmit(form: any) {
    console.log('Form Submitted!', form);
  }
}

