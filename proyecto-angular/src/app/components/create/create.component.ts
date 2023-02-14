import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent {
  public title: string;
  public project: Project;
  public status: string = '';
  public filesToUpload: Array<File> = [];
  public save_project: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Crear proyecto";
    this.project = new Project('','','','', new Date().getFullYear(),'','');
  }

  onSubmit(form:any){
    this._projectService.saveProyect(this.project).subscribe(
      res => {
        if (res){
          this._uploadService.makeFileRequest(Global.url+'upload-image/'+res.project._id,[], this.filesToUpload, 'image')
          .then((result:any) => {
            this.save_project = result.project;

            this.status = 'success';
            form.reset();
          });
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
