import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Obj } from '../obj';
import { ServicesService } from '../services.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-notes',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.css'
})
export class AddNotesComponent {

  constructor(private service:ServicesService,private rout:Router){}

  Objt:Obj={"title":"","content":""}

submit()
{
  this.service.insert(this.Objt).subscribe(data=>{
    this.rout.navigate(['view'])
  })
}  
}
