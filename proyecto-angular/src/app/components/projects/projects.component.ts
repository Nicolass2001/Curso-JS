import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit{
  public url: string;
  public projects: Project[] = [];

  constructor(
    private _projectService: ProjectService 
  ){
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      res => {
        if (res){
          this.projects = <Array<Project>> res.projects;
          console.log(this.projects);
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

}