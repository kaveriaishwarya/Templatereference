import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Templatereference';
@ViewChild('dobInput') DOB:ElementRef
@ViewChild('ageInput') Age:ElementRef
@ViewChild(DemoComponent,{static:true}) democomp :DemoComponent
  calculateAge(){
      let birthdate = new Date(this.DOB.nativeElement.value).getFullYear()
      let currentdate = new Date().getFullYear()
      let age = currentdate - birthdate ; 
      this.Age.nativeElement.value=age

  }
}
