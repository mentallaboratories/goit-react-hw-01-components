// import {RecipeList} from './RecipeList/RecipeList';
import { Profile } from './Profile/Profile';

// import recipes from '../recipes.json';
import user from '../user.json';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Layout>
      {/* <RecipeList items={recipes}/> */}
      <Profile item={user}/>
      <GlobalStyle/>
      </Layout>
    </div>
  );
};
 