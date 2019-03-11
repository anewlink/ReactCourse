import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="MyReactApp">
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
