import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  form: any;
  error: string | null = null;

  constructor(
    // private fb: FormBuilder, private auth: AuthService, 
    private router: Router, private route: ActivatedRoute) {
    // this.form = this.fb.group({ username: ['', Validators.required], password: ['', Validators.required] });
  }

  submit() {
    if (this.form.invalid) return this.form.markAllAsTouched();
    const { username, password } = this.form.value;
    // this.auth.login(username, password).then(() => {
    //   const returnUrl = (this.route.snapshot.queryParamMap.get('returnUrl') as string) || '/';
    //   this.router.navigateByUrl(returnUrl);
    // })
    // .catch(err => { this.error = (err && err.message) || 'Error de login'; });
  }
}
