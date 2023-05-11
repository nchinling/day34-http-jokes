import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './models';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day34-http-jokes';

  
  jokeSvc = inject(JokeService)

  //constructor(private dogSvc: DogService) { }

  resp$!: Observable<ApiResponse>
  prom$!: Promise<ApiResponse>

  getJokesAsObservable() {
    this.resp$ = this.jokeSvc.getJokeAsObservable()
  }

  getJokesAsPromise() {
    this.prom$ = this.jokeSvc.getJokeAsPromise()
  }


}
