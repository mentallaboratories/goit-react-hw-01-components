// import {RecipeList} from './RecipeList/RecipeList';
import { Profile } from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';

// import recipes from '../recipes.json';
// імпорт JSON
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Layout>
      {/* <RecipeList items={recipes}/> */}
      <Profile item={user}/>
      <Statistics data={data}/>
      <FriendList items={friends}/>
      <GlobalStyle/>
      </Layout>
    </div>
  );
};
 