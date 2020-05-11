import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent implements OnInit {
  project: Project;
  title: string;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set currentProject(value) {
    if (value) this.title = value.title;
    this.project = Object.assign({}, value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
