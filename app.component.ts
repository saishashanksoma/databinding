import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';
  public name ="saishashank"
  public topic =" data binding"
  public value =""
  public image ="/assets/Screenshot 2024-03-25 114157.jpg"
  onclick(){
   console.log("Thank you submit")
   
  }
}
