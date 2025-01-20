import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../services.service';
import { Datatypes } from '../datatypes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-notes',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './view-notes.component.html',
  styleUrl: './view-notes.component.css'
})
export class ViewNotesComponent implements OnInit{
  
  constructor(private service:ServicesService){}

  array:Datatypes[]=[]

  ngOnInit(): void {
    this.service.view().subscribe(data=>{
      this.array=data
    })
  } 

  removedata(id:number)
  { 
    let ch=confirm("Do you want to delete this note?")
    if(ch===true)
    {
      this.service.remove(id).subscribe(dt=>{
        this.array = this.array.filter(item => item.id !== id);
    })
    }
    else
    {
      alert("Note not deleted")
    }
  }
}
