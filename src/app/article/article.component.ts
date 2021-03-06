import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  post={};
  constructor(private config: ConfigService ,private location :Location , private route:ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(id);

  }

  getPostById(id:number){
    return this.config.getPostById(id);
  }

  getBack()
  {
    this.location.back();
  }
}
