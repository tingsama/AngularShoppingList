import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Burrito', 
      'Mexican food with black beans, veges, and protein', 
      'https://upload.wikimedia.org/wikipedia/commons/6/60/Burrito.JPG'),
    new Recipe(
      'Sushi Bowl', 
      'Japanese food with fish and veges', 
      'https://bellyfull.net/wp-content/uploads/2021/08/Sushi-Bowls-blog-2.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
