import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import AddProductButton from './AddProductButton'
import AddProductForm from './AddProductForm'

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
          {<AddProductButton/>}
          {<AddProductForm/>}
        </div>
      )
    }
  }
  
  export default FilterableProductTable