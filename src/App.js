import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/Layout';

class App extends React.Component {
  render() {
    return (
      <div >
        <Layout>
           <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
