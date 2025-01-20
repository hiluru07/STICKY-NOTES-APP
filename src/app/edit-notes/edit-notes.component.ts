import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Datatypes } from '../datatypes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-notes',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './edit-notes.component.html',
  styleUrl: './edit-notes.component.css'
})
export class EditNotesComponent implements OnInit{

  constructor(private service:ServicesService,private rout:Router, private actrout:ActivatedRoute){}
 
  Objt:Datatypes={"id":0,"title":"","content":""}

  ngOnInit(): void {
    let id:number=this.actrout.snapshot.params["id"]
    this.service.selectdata(id).subscribe(data=>{
      this.Objt=data
    }) 
  }
  updatedate()
  {
    this.service.update(this.Objt.id,this.Objt).subscribe(date=>{
      this.rout.navigate(['view'])
    })
  } 
  

  
}
