import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  department=[
    {
      id:1,
      Title: "Vaazha",
      Image: "../../../assets/vaazha--biopic-of-a-billion-boys.avif",
      rating:"9/10",
      genre:"Comedy/Drama",
    },
    {
      id:2,
      Title: "Nunakkuzhi",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Nunakuzhi.jpg/330px-Nunakuzhi.jpg",
      rating:"8.1/10",
      genre:"Comedy/Thriller",
    },
    {
      id:3,
      Title: "Kalki",
      Image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg",
      rating:"9.5/10",
      genre:"Comedy/drama",
    },
    {
      id:4,
      Title: "Turbo",
      Image: "https://upload.wikimedia.org/wikipedia/en/e/e2/Turbo_Poster.jpg",
      rating:"8.5/10",
      genre:"Fiction",
    },
    
  ]

}
