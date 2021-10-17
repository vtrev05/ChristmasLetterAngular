import { Component, Input, OnInit } from '@angular/core';
import { FatherInterface } from '../models/father-interface';

@Component({
  selector: 'app-third-son',
  templateUrl: './third-son.component.html',
  styleUrls: ['./third-son.component.scss']
})
export class ThirdSonComponent implements OnInit {
@Input() public giftsGallery!: FatherInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
