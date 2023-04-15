// import {RecipeList} from './RecipeList/RecipeList';
import { Profile } from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';

// import recipes from '../recipes.json';
// імпорт JSON
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json'

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';


export const App = () => {
  return (
    <div>
      <Layout>
      {/* <RecipeList items={recipes}/> */}
      <Profile item={user}/>
      <Statistics data={data}/>
      <FriendList items={friends}/>
      <Transactions items={transactions}/>
      <GlobalStyle/>
      </Layout>
    </div>
  );
};
 