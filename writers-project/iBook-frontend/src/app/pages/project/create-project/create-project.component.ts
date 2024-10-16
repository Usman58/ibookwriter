import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

import { FormBuilder} from '@angular/forms';
import Quill from 'quill';
import { ProjectsService } from 'src/app/core/services/projects.service';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent{
  blured=false;
  focused = false;
  searchTerm: string = '';
  wordData: any = null;
  
    selectedWordInfo: any;
    form = this.fb.group({
      title:['',Validators.required],
      document:['',Validators.required]
    });
    quillEditor: Quill | undefined;
    constructor(private fb: FormBuilder, private http:HttpClient,private _projectS:ProjectsService,private router:Router) {}

  onEditorCreated(quill: Quill) {
    this.quillEditor = quill;
  }

  getSelectedText() {
    const range = this.quillEditor?.getSelection();
if (range) {
  if (range.length == 0) {
    console.log('User cursor is at index', range.index);
  } else {
    
    const text = this.quillEditor?.getText(range.index, range.length);
    if(text){
      this.getWordInfo(text)
    }
    
    console.log('User has highlighted: ', text);
  }
} else {
  console.log('User cursor is not in editor');
}
  }

    getContent() {
      if (this.quillEditor) {
        const content = this.quillEditor.getContents();
        console.log('Editor content:', content);
      }
    }
   
   searchWord(){

  }
 
    getWordInfo(word: string) {
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      https: this.http.get(apiUrl).subscribe(
        (res: any) => {
          console.log('res', res);
          this.wordData = res[0];
           
        },
        (error) => {
          console.error('Error fetching word info', error);
        }
      );
    }



  get fC() {
    return this.form.controls
  }

submit(){
  console.log("this.form.value",this.form.value)
  this._projectS.createProject(this.form.value).subscribe((res)=>{
    
    console.log("Success")
    this.router.navigateByUrl('/projects');
  })
}

}