import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(private api:ApiService){}
  movies:any=""
  ngOnInit()
  {
    this.api.bookseats().subscribe((data:any)=>{this.movies=data})
  }

}
