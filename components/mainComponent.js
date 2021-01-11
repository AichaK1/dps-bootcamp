import React from "react";
import { AddRecipe } from "./AddRecipe";
import Link from "next/link";

export const MainComponent = () => {
  const receips = [
    { name: "test", description: "test test" },
    { name: "test2", description: "test test" },
  ];
  return (
    <div>
      <h1>Recipes APP</h1>
      <div class="ui relaxed divided list">
        {receips.map(({name,description}) => (
          <div class="item flex">

              <div>
                <a class="header">{name}</a>
                <div class="description">{description}</div>
              </div>
              <div><i class=" pencil alternate icon"></i> <i class=" trash alternate icon"></i></div>

          </div>
        ))}
      </div>
      <Link href="/add-recipe">
        <button class="ui positive basic button block">Add new recipe</button>
      </Link>
      <button class="ui red basic button block">Remove All</button>
    </div>
  );
};
