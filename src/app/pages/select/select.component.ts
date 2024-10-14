import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  constructor(private routeId: ActivatedRoute, private api:ApiService){}
  data:any=[]
    ngOnInit(){
      this.api.bookseats().subscribe((res:any)=>{
        let id=this.routeId.snapshot.paramMap.get('id')
        let response=res
        let movies=response.filter((e:any)=>e.id==id)
        this.data=movies[0]
      })
    }
}
