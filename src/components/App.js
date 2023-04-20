import { Component } from 'react';
import {RecipeList} from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

// initialRecipes state
export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  //deleteRecipe function body

  deleteRecipe = recipeId=>{
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    })); 
  };

  render(){
    return (
      <div>
        <Layout>
        <RecipeList 
        items={this.state.recipes}
// props onDelete calls deleteRecipe
        onDelete={this.deleteRecipe}
        />
        <GlobalStyle/>
        </Layout>
      </div>
    );
  }
};
 