import {RecipeList} from './RecipeList';
import { RecipeCard } from './RecipeCard';
import recipes from '../recipes.json'

export const App = () => {
  return (
    <div>
      <RecipeList items={recipes}/>
    </div>
  );
};
 