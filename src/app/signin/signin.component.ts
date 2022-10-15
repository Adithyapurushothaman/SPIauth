import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
signupForm!:FormGroup
  constructor( private formbuilder:FormBuilder,private http:HttpClient,private r:Router) {
    
   }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group(
      {

        email:[''],
        password:['']

      }
     

    )
  }

}
