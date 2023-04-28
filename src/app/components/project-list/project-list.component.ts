import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  projects: any[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService
      .getAllProjects()
      .subscribe((response) => (this.projects = response));
  }
}
