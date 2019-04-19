import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicationService } from 'src/app/core/services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private applicationService: ApplicationService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', [Validators.required, Validators.minLength(30)]]
    })
  }

  apply() {
    this.applicationService.apply(this.form.value)
      .subscribe((res) => {
        this.router.navigate(['/dashboard'/* /application/user */]);
      });
  }

}
