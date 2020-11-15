import { Triqui } from './../../models/Triqui';
import { TriquiService } from './../../services/triqui.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triqui',
  templateUrl: './triqui.component.html',
  styleUrls: ['./triqui.component.css']
})
export class TriquiComponent implements OnInit {

  tablero: string[][];
  winner: string;
  pJugadas: number;
  pGanadas: number;
  pPerdidas: number;
  pEmpatadas: number;
  form: FormGroup;

  constructor(private triquiService: TriquiService)
  { 
    this.tablero = [
                      ['_','_','_'],
                      ['_','_','_'],
                      ['_','_','_']
                    ];
  }

  ngOnInit(): void { 
    this.getGamesStats()
  }

  getGamesPlayed(){
    this.triquiService.getGamesPlayed()
        .subscribe(
          res => {
            this.pJugadas = res
          },
          err => console.log(err)
        )
  }

  getGamesWin(){
    this.triquiService.getGamesWin()
        .subscribe(
          res => {
            this.pGanadas = res
          },
          err => console.log(err)
        )
  }

  getGamesLost(){
    this.triquiService.getGamesLost()
        .subscribe(
          res => {
            this.pPerdidas = res
          },
          err => console.log(err)
        )
  }

  getGamesTie(){
    this.triquiService.getGamesTie()
        .subscribe(
          res => {
            this.pEmpatadas = res
          },
          err => console.log(err)
        )
  }

  getGamesStats(){
    this.getGamesPlayed()
    this.getGamesWin()
    this.getGamesLost()
    this.getGamesTie()
  }

  registerGame(result: string){
    const game: Triqui = { player: "Jugador", result };
    console.log(game);    
    this.triquiService.registerGame(game)
        .subscribe((res) => {          
          console.log(res);
        });
    this.getGamesStats()
  }

  put(f: number, c: number): void{
    if(this.tablero[f][c]==='_' && this.winner==undefined)
    {
      this.tablero[f][c] = 'X';
      if(this.checkWin('X')){
        this.winner = 'Ganaste!!!';
        this.registerGame('win');
        return;
      }
      if (!this.isComplete())
      {
        this.putMachine();
        if(this.checkWin('O')){
          this.winner = 'Perdiste ;(';
          this.registerGame('lost');
        }
      }
      else
      {
        this.winner = 'Empate';
        this.registerGame('tie');
      }      
    }
    //console.log(this.tablero)
  }

  private putMachine(): void{
    let salir = false;    
    do{
       let f = this.getRandomInt(0,3);
       let c = this.getRandomInt(0,3);
       if(this.tablero[f][c]==='_')
       {
        this.tablero[f][c] = 'O';
        //console.log(this.tablero)
        salir = true;
       }
    }while(!salir || this.isComplete());
  }

  private isComplete(): boolean{
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
        if(this.tablero[i][j]==='_'){
          return false;
        }
      }
    }
    return true;
  }
 
  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private checkWin(player: string): boolean{

    for(let i=0; i<3; i++)
    {
      if(this.tablero[i][0]===player && this.tablero[i][1]===player && this.tablero[i][2]===player) 
      {        
        return true;
      }
      if(this.tablero[0][i]===player && this.tablero[1][i]===player && this.tablero[2][i]===player) 
      {        
        return true;
      }
    }
    if(this.tablero[0][0]===player && this.tablero[1][1]===player && this.tablero[2][2]===player) 
    {      
      return true;
    }
    if(this.tablero[0][2]===player && this.tablero[1][1]===player && this.tablero[2][0]===player) 
    {
      return true;
    }    
    return false;
  }

  reset(): void{
    this.winner = undefined;
    this.tablero = [
      ['_','_','_'],
      ['_','_','_'],
      ['_','_','_']
    ];
  }

}
