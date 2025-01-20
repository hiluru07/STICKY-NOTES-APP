import { Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';

export const routes: Routes = [
    {path:"add",component:AddNotesComponent},
    {path:"edit/:id",component:EditNotesComponent},
    {path:"view",component:ViewNotesComponent},
    {path:"",component:ViewNotesComponent}
];
