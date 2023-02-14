import { Component } from '@angular/core';

import { content } from 'src/app/models/content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public web: string;
  public article;

  constructor(){
    this.title = content.title;
    this.subtitle = content.subtitle;
    this.web = content.web;
    this.article = content.article;
  }

}
