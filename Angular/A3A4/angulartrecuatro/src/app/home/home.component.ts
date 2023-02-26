import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() public nombre: String;
  @Input() public pokemon: Pokemon[];

  constructor (private _pokemonService :PokemonService){
    this.nombre = "";
    this.pokemon = [
      new Pokemon("Fire","https://pokeapi.co/api/v2/type/10"),
      new Pokemon("Water", "https://pokeapi.co/api/v2/type/11"),
      new Pokemon("Grass", "https://pokeapi.co/api/v2/type/12")
    ]
  }
  ngOnInit(): void{
    this._pokemonService.getPokemons().subscribe(
      response => {
        for (var i = 0; i < response.data.length; i++){
          this.pokemon[i] = new Pokemon(
            response.data[i].attributes.canonicalTitle,
            response.data[i].attributes.canonicalImage,
          );
        }

      },
      error =>{
        console.log(error)
      }
    );
  }


}

