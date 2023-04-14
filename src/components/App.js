import {RecipeList} from './RecipeList/RecipeList';
import recipes from '../recipes.json'
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Layout>
      <RecipeList items={recipes}/>
      <GlobalStyle/>
      </Layout>
    </div>
  );
};
 