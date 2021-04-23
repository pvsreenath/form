import { Component } from '@angular/core';
import { Data } from './data';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form-challenge';
  
  data = new Data()
  constructor(private service:DataService) {}
  onSubmit(){
    this.service.enroll(this.data).subscribe(
      data=>console.log('success',data),
      error=>console.log('error',error)
    )
  }
}
