import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Be } from './be-form'

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
  
  // word forms
  isSingular: boolean = true;
  isI: boolean = false;
  be = new Be();
  isBe: boolean = false
  
  // interface
  isChecked = new FormControl(true);



  constructor (private http: HttpClient) {
    this.be = new Be();


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
        
        this.isBe = data['baseform'] === 'be'
        this.setNumber();
        this.be.set(this.isSingular, this.isI);

        });
  }
  
  radioChange(event) {
    console.log("event: " , event.target.value);
    if (event.target.value === "singular") {
        this.isSingular = true;
      } else {
        this.isSingular = false;
      }
      this.be.set(this.isSingular, this.isI);
    }

    setNumber() {
      if ("i" === this.subject.trim().toLowerCase()) {
        this.isI = true;
        this.isSingular = false;
        return;
      }
      this.isI = false;

      let singPronouns: string[] = ['he','she', 'it'];
      singPronouns.forEach(element => {
        if (element === this.subject.trim().toLowerCase()) {
          this.isSingular = true;
          return;
        }
      });

      let plPronouns: string[] = ['we','they', 'you'];
      plPronouns.forEach(element => {
        if (element === this.subject.trim().toLowerCase()) {
          this.isSingular = false;
          return;
        }
      });


      return 1;
    }


}




