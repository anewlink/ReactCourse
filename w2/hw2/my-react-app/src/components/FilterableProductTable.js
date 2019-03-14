import React, {Component} from 'react'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      isStockOnly: false,
      addProduct: {}
    }
  }
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      category: PropTypes.string,
      price: PropTypes.string,
      stocked: PropTypes.bool,
      name: PropTypes.string
    })).isRequired,
    errMess: PropTypes.string,
    isLoading: PropTypes.bool
  }

  filterValueChanged = filterText => {
    this.setState({filterText})
  }

  stockOnlyValueChanged = () => {
    this.setState({isStockOnly: !this.state.isStockOnly})
  }

  addProductFormViewChanged = newProduct => {
    return this.props.addProductFormViewChanged(newProduct)
  }  

  getProductTableProps = () => ({
    filterText: this.state.filterText,
    isStockOnly: this.state.isStockOnly,
    products: this.props.products,
    isLoading: this.props.isLoading,
    errMess: this.props.errMess
  })

    render () {
      const {
        filterText,
        isStockOnly
      } = this.state

      return (
        <div>
          <div>
            <h4>PRODUCT SEARCH APP</h4>
          </div>
          <SearchBar 
            filterText={filterText}
            isStockOnly={isStockOnly}
            filterValueChanged={this.filterValueChanged}
            stockOnlyValueChanged={this.stockOnlyValueChanged}
          />
          <br />
          <ProductTable {...this.getProductTableProps()}/>
        </div>
      )
    }
  }

  FilterableProductTable.prototypes = {
    addProductFormViewChanged: PropTypes.func.isRequired
  }
  
  export default FilterableProductTable