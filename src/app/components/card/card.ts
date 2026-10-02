import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() category: string = "";
  @Input() image: string = ""
  @Input() readTime: string = ""
  @Input() date: string = ""
  @Input() title: string = ""
  @Input() name: string = ""
  @Input() role: string = ""
  @Input() avatar: string = ""
  @Input() excerpt:string = ""
}
