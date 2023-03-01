import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[PokemonService]
})
export class HomeComponent  implements OnInit{
  @Input() public nombre: String;
  @Input() public pokemons: Pokemon[];

  constructor (private _pokemonService :PokemonService){
    this.nombre = "";
    this.pokemons = [
      new Pokemon("Fire","https://pokeapi.co/api/v2/type/10"),
      new Pokemon("Water", "https://pokeapi.co/api/v2/type/11"),
      new Pokemon("Grass", "https://pokeapi.co/api/v2/type/12")
    ]
  }

  cambioPokemon(event:Event) {
    console.log((event.target as HTMLInputElement).value);
    this._pokemonService.type=(event.target as HTMLInputElement).value;
    console.log(this._pokemonService.type);
    this._pokemonService.getPokemons().subscribe(
      response => {
        for (var i = 0; i < response.pokemon.length; i++){
          this.pokemons[i] = new Pokemon(
            response.pokemon[i].pokemon.name,
            response.pokemon[i].pokemon.url
          );
          console.log(this.pokemons[i])
        }

      },
      error =>{
        console.log(error)
      }
    );
  }

  ngOnInit(): void{
    this._pokemonService.getPokemons().subscribe(
      response => {
        for (var i = 0; i < response.pokemon.length; i++){
          this.pokemons[i] = new Pokemon(
            response.pokemon[i].pokemon.name,
            response.pokemon[i].pokemon.url
          );
          console.log(this.pokemons[i])
        }

      },
      error =>{
        console.log(error)
      }
    );
  }


}

