import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-son',
  templateUrl: './first-son.component.html',
  styleUrls: ['./first-son.component.scss']
})
export class FirstSonComponent implements OnInit {
@Input() inputFirstSon: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
