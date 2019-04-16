import { Component, OnInit } from '@angular/core';

const URLS_DATA = [
  'https://www.designhill.com/design-blog/wp-content/uploads/2015/03/Computer-Logo-Designs.png',
  'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/Target_Corporation_logo_vector.svg.png?auto=format&q=60&fit=max&w=930',
  'https://www.freelogodesign.org/Content/img/logo-ex-6.png',
  'https://png.pngtree.com/svg/20170307/c02483909c.png',
  'https://99designs-blog.imgix.net/wp-content/uploads/2018/07/attachment_77941859-e1531895211677.jpg?auto=format&q=60&fit=max&w=930',
  'https://i.pinimg.com/originals/e5/ac/01/e5ac013ed118e8cd326ac07e4d0dd6e5.png'
];

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  imageUrls: string[] = URLS_DATA;

  constructor() { }

  ngOnInit() {
  }

}
