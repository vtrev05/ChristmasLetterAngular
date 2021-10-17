import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-second-son',
  templateUrl: './second-son.component.html',
  styleUrls: ['./second-son.component.scss']
})
export class SecondSonComponent implements OnInit {
public myMessage: string = 'Se ha enviado tu carta a los Reyes Magos, esperamos que todos tus deseos se cumplan.';
@Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  sendMessage() {
    this.messageEvent.emit(this.myMessage)
  }
}
