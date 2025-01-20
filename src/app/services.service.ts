import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obj } from './obj';
import { Datatypes } from './datatypes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  private url:string="http://localhost:3000/Datas"

insert(data:Obj):Observable<Datatypes[]>
{
  return this.http.post<Datatypes[]>(this.url,data)
}
view():Observable<Datatypes[]>
{
  return this.http.get<Datatypes[]>(this.url)
}
selectdata(id:number):Observable<Datatypes>
{
  return this.http.get<Datatypes>(this.url+"/"+id)
}
update(id:number,data:Datatypes):Observable<Datatypes[]>
{
  return this.http.put<Datatypes[]>(this.url+"/"+id,data)
}
remove(id:number):Observable<Datatypes[]>
{
  return this.http.delete<Datatypes[]>(this.url+"/"+id)
}  
}
