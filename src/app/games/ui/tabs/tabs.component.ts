import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleClicked(): void {
    this.isExpanded = !this.isExpanded;
  }
}
