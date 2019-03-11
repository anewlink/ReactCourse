import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
    render () {
      return (
        <div>
          <div>
            <h4>PRODUCT SEARCH APP</h4>
          </div>
          {<SearchBar />}
          <br />
          {<ProductTable />}
        </div>
      )
    }
  }
  
  export default FilterableProductTable