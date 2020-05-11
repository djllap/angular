import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';

const rootURL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';

  constructor(private httpClient: HttpClient) { }

  getURL() { return `${rootURL}${this.model}` } 

  getURLWithId(id) {
    return `${this.getURL()}/${id}`
  }

  all() {
    return this.httpClient.get(this.getURL())
  }

  create(project) {
    return this.httpClient.post(this.getURL(), project)
  }

  update(project) {
    return this.httpClient.patch(this.getURLWithId(project.id), project)
  }

  delete(projectId) {
    return this.httpClient.delete(this.getURLWithId(projectId), projectId)
  }
}
