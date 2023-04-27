import { Component } from 'react';
import {RecipeList} from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { RecipeForm } from './RecipeForm/RecipeForm';

// initialRecipes state
export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  addRecipe = newRecipe => {
    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe]
    }));
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
          <RecipeForm onSave={this.addRecipe}/>
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
 