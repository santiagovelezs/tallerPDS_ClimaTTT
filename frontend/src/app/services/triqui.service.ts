import { Triqui } from './../models/Triqui';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriquiService {

  private URL_SERVER = "http://localhost:3000/triqui"

  constructor(private http: HttpClient) { }

  registerGame(game: Triqui){
    console.log("Game: ", game);
    return this.http.post(this.URL_SERVER, game);
  }  

  getGamesPlayed(){
    return this.http.get<number>(this.URL_SERVER+'/gamesPlayed');
  }

  getGamesWin(){
    return this.http.get<number>(this.URL_SERVER+'/gamesWin');
  }

  getGamesLost(){
    return this.http.get<number>(this.URL_SERVER+'/gamesLost');
  }

  getGamesTie(){
    return this.http.get<number>(this.URL_SERVER+'/gamesTie');
  }

}
