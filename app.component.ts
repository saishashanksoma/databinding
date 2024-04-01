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
  public image ="https://www.bacancytechnology.com/blog/wp-content/uploads/2016/04/data-binding.jpg"
  onclick(){
   console.log("Thank you submit")
   
  }
}
