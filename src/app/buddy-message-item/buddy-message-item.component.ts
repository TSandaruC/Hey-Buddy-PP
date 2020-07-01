import {Component, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-buddy-message-item',
  templateUrl: './buddy-message-item.component.html',
  styleUrls: ['./buddy-message-item.component.css']
})

export class BuddyMessageItemComponent implements OnInit {
  @Input() messageId: string;
  @Input() messageSender: string;
  @Input() messageDetail: string;
  @Output() timeStamp: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  getTimeStamp() {
    return moment().format().toString();
  }
}
