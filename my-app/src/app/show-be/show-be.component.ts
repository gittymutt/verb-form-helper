import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-be',
  templateUrl: './show-be.component.html',
  styleUrls: ['./show-be.component.css']
})
export class ShowBeComponent implements OnInit {
  @Input() subject;
  @Input() isBe;
  @Input() be;
  @Input() isSingular;

  constructor() { }

  ngOnInit(): void {
  }

}
