import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is a test',
    'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiopoOtspTXAhXl3YMKHVZaBOUQjRwIBw&url=http%3A%2F%2Fmaxpixel.freegreatpicture.com%2FBio-Food-Home-Made-Recipe-Dishes-Kitchen-Meals-1175496&psig=AOvVaw2k2J4bb4Gk4SPDQPoko_jA&ust=1509317057981639')
  ];

  constructor() { }

  ngOnInit() {
  }

}
