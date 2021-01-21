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

export class AppComponent implements OnInit {
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
  //number = new FormControl();
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      subject: new FormControl('The dog'),
      verb: new FormControl('go'),
      number: new FormControl('singular')
    });
  }

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
        //console.log("subject:", this.subject);
        
        
        this.isBe = data['baseform'] === 'be'
        this.setNumber();
        this.be.set(this.isSingular, this.isI);
        //console.log("radio button:" + this.number.value);
        });
  }
  
  radioChange(event) {
    //console.log("event: " , event.target.value);
    if (event.target.value === "singular") {
        this.isSingular = true;
        //this.number.setValue('singular');
        this.form.patchValue({number: 'singular'});

        
        
      } else {
        this.isSingular = false;
        //this.number.setValue('plural');
        this.form.patchValue({number: 'plural'});
      }
      this.be.set(this.isSingular, this.isI);
    }

    setNumber() {
      if ("i" === this.subject.trim().toLowerCase()) {
        this.isI = true;
        this.isSingular = false;
        //this.number.setValue('plural');
        this.form.patchValue({number: 'plural'});
        return;
      }
      this.isI = false;

      let singPronouns: string[] = ['he','she', 'it'];
      singPronouns.forEach(element => {
        if (element === this.subject.trim().toLowerCase()) {
          //this.number.patchValue('singular');
          this.form.patchValue({number: 'singular'});
          this.isSingular = true;
          return;
        }
      });

      let plPronouns: string[] = ['we','they', 'you'];
      plPronouns.forEach(element => {
        if (element === this.subject.trim().toLowerCase()) {
          //this.number.patchValue('plural');
          this.form.patchValue({number: 'plural'});
          console.log("form:" + this.form);
          
          this.isSingular = false;
          return;
        }
      });


      return 1;
    }


}




