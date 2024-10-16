import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/services/projects.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  desColumns = ['title', 'created_at', 'document'];
  columnNames = ['Title', 'Created At', 'Document'];
  projectItems:any=[]
  constructor( private datePipe: DatePipe,private _projectS:ProjectsService) {

  }
  ngOnInit(): void {
    this.getProjects();
  }
  getProjects() {
     this._projectS.projectsApi().subscribe((res:any) => {
      console.log("Projects",res);
      if(res){
        this.projectItems=res;
      }
      
     })

  }
  
}

