import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  isError = false;
  errorMessage = '';
  successMessage = '';
  isSubmitting = false;

  constructor(
    private readonly http: HttpClient
  ) { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
  }

  submit() {
    this.isError = false;
    this.errorMessage = '';
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.subject || !this.contactForm.message) {
      this.isError = true;
      this.errorMessage = 'please fill all blank fields';
      return;
    }

    this.isSubmitting = true;
    this.http.post('https://metlifetechsolutions.com/mail/mail.php', this.contactForm, {headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })})
    .pipe(
      catchError(err => {
        return of(err);
      })
    )
    .subscribe(response => {
      this.isSubmitting = false;
      this.resetForm();
      this.successMessage = 'message has been succesfully sent!';
    });
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
  }
}
