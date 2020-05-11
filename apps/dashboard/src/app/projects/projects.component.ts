import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projects$;
  currentProject: Project;

  ngOnInit(): void {
    this.getProjects()
    this.resetProject()
  }
  
  selectProject = (project) => {
    this.currentProject = project;
  }

  getProjects() {
    this.projects$ = this.projectsService.all()
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(res => this.getProjects());
  }

  saveProject(project) {

  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    }
    this.selectProject(emptyProject)
  }

  cancel = () => {
    this.selectProject(null);
    this.resetProject();
  }

  constructor(private projectsService: ProjectsService) { }

}
