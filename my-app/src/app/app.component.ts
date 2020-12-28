import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  subject: string;
  verb;     // what data type should this be?
  verbForm: string;
  url1:string = 'http://localhost:5000/?subject=';
  url2:string = '&verb=';
  isSingular: Boolean = true;
  isChecked = new FormControl(true);

  
  constructor (private http: HttpClient) {
    this.http.get(this.url1+'the%20dog'+this.url2+'go')
      .toPromise().then( data => {
        console.log("incoming datatype is: ", typeof(data));
        
        this.verb = data;
        this.subject = data['subject'];
      });
    
  }

  change(subjectTxt: string, verbTxt: { value: string; }, ) {
    console.log("verbTxt: " + verbTxt.value)
    this.http.get(this.url1+subjectTxt+this.url2+verbTxt.value)
        .toPromise().then( data => {
        this.verb = data;
        this.subject = data['subject'];
        console.log("subject:", this.subject);
        console.log( this.isChecked.value );
        
        });
  }
  
  radioChange(event) {
    console.log("event: " , event.target.value);
    if (event.target.value === "singular") {
      this.isSingular = true;
    } else {
      this.isSingular = false;
    }
  }
}
