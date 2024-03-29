import { Component, OnInit } from '@angular/core';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit{
  public url: string;
  public project: Project;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id)
    });
  }

  setConfirm(confirm: boolean){
    this.confirm = confirm;
  }

  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  deleteProject(id:string){
    this._projectService.deleteProject(id).subscribe(
      response => {
          this._router.navigate(['/proyectos']);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
