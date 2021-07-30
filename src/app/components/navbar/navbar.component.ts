import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = "https://yt3.ggpht.com/ytc/AKedOLR3TsLJUrn-N6qCGYAzdSp9EKXvK6ZK0R3NbzWhMQ=s900-c-k-c0x00ffffff-no-rj"

  constructor() { }

  ngOnInit(): void {
  }

}
