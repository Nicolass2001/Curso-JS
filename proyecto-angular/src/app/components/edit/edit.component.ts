import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string = '';
  public filesToUpload: Array<File>;
  public save_project: any;
  public url = Global.url;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute
  ){
    this.title = "Editar proyecto";
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id)
    });
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

  onSubmit(form:any){
    this._projectService.updateProject(this.project).subscribe(
      res => {
        if (res){
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+'upload-image/'+res.projectUpdated._id,[], this.filesToUpload, 'image')
            .then((result:any) => {
              console.log(result);
              this.save_project = result.project;

              this.status = 'success';
            });
          }else{
            console.log(res);
            this.save_project = res.projectUpdated;

            this.status = 'success';
          }
        }else{
          this.status = 'failed';
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  fileChangeEnvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }
}
