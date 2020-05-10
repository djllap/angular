import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projects: Project[];
  currentProject: Project;

  selectProject = (project) => {
    this.currentProject = project;
    console.log(this.currentProject);
  }

  getProjects() {
    this.projects = this.projectsService.all();
  }

  cancel = () => this.selectProject(null)

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects()
  }

}
