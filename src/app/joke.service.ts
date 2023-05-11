import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ApiResponse } from "./models";
import { Observable, lastValueFrom, map } from "rxjs";


@Injectable()
export class JokeService{

//http = inject(HttpClient)

// jokes: ApiResponse[] = []

  constructor(private http: HttpClient) { }

  getJokeAsObservable(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
  }

  getJokeAsPromise(): Promise<ApiResponse> {
    return lastValueFrom(
      this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
      //piping and mapping
      .pipe(
        map(response=>{
                    // Convert the response to uppercase
                    response.setup = response.setup.toUpperCase();
                    response.punchline = response.punchline.toUpperCase();
                    return response;
        })
      )
      //piping and mapping
    )
  }

  // getJokeAsObservableString(): Observable<string> {
  //   return this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
  //       .pipe(
  //         map(resp => resp.setup)
  //       )
  // }

  // getJokeAsPromiseImage(): Promise<string> {
  //   return lastValueFrom(
  //     this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
  //   )
  //   .then(resp => resp.setup)
  // }





}