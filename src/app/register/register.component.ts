import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup
  constructor( private formbuilder:FormBuilder,private http:HttpClient,private r:Router) {
    
   }

  ngOnInit(): void {
    this.registerForm=this.formbuilder.group(
      {
        name:[''],
        email:[''],
        password:['']

      }
    )
  }
  Register(){
    this.http.post<any>('http://localhost:3000/user',this.registerForm.value).subscribe(res=>
    {
      alert("hI");
    })
  }
}
