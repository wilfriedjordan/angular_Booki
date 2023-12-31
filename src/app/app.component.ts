import { Component, OnInit } from '@angular/core';
import { Card } from './landing-page/models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  myCard!: Card
  ngOnInit(): void {

  }
}
