import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  form: any;

  paymentOptions = [
    { value: 'efectivo', label: 'Efectivo' },
    { value: 'tarjeta', label: 'Tarjeta de crédito' },
    { value: 'nequi', label: 'Nequi' },
    { value: 'bancolombia', label: 'Bancolombia' },
    { value: 'otro', label: 'Otro' },
  ];

  success = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+\-\s]{6,20}$')]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      notifications: [false],
      payment: ['efectivo', [Validators.required]],
    });
  }

  /* this. form.get('name') es igual que this.form.controls.name excepto en casos anidados como:
  this.form = this.fb.group({
  user: this.fb.group({
    name: [''],
    email: ['']
  }),
  address: this.fb.group({
    city: [''],
    country: ['']
  })
});

en ese caso seria this.form.controls.user.controls.name  o this.form.get('user.name')
*/

  submit() {
    console.log('los controles:', this.form.get('name')); 
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Replace this with a service call when ready
    console.log('Checkout form value:', this.form.value);
    this.success = true;
  }
  getErrorMessages(controlName:string){
    const control = this.form.get(controlName)
    if(!control || !control.errors) return null;

    if(control.errors['required']){
      return 'Este campo es obligatorio';
    }
    if(control.errors['minlength']){
      const requiredLength = control.errors['minlength'].requiredLength;
      return `Mínimo ${requiredLength} caracteres`;
    }
    if(control.errors['pattern']){
      return 'Formato inválido';
    }
    if(control.errors['email']){
      return 'Correo electrónico inválido';
    }
    if(control.errors['min']){
      const min = control.errors['min'].min;
      return `El valor mínimo es ${min}`;
    }
    return null
  }

  reset() {
    this.form.reset({ notifications: false, payment: 'efectivo' });
    this.success = false;
  }

  // convenience getters for template
  get f() { 
    return this.form.controls;
    console.log('los controles:', this.form.controls); 
  }
}
