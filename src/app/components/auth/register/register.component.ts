import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

const namePattern = /^[A-Z][a-z]+$/;
const passwordPattern = /^[\w0-9]{5,}$/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', [Validators.required, Validators.pattern(namePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(namePattern)]],
      password: ['', [Validators.required, Validators.pattern(passwordPattern)]],
      confirmPassword: ['', Validators.required],
    }, {validator: this.passwordsMatch});
  }

  passwordsMatch(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true }
  }

  register() {
    this.authService.registerUser(this.form.value)
      .subscribe((_) => {
        this.router.navigate(['/']);
      });
  }
}
