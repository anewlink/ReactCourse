import React, {Component} from 'react'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

import AddProductButton from './AddProductButton'
import AddProductForm from './AddProductForm'

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      isStockOnly: false,
      hideAddForm: true
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
    isLoading: PropTypes.bool,
    hideAddForm: PropTypes.bool
  }

  filterValueChanged = filterText => {
    this.setState({filterText})
  }

  stockOnlyValueChanged = () => {
    this.setState({isStockOnly: !this.state.isStockOnly})
  }

  hideAddProductForm = () => {
    this.setState({hideAddForm: true})
  }
  
  showAddProductForm = () => {
    this.setState({hideAddForm: false})
  }

  getProductTableProps = () => ({
    filterText: this.state.filterText,
    isStockOnly: this.state.isStockOnly,
    products: this.props.products,
    isLoading: this.props.isLoading,
    errMess: this.props.errMess,
    hideAddForm: this.props.hideAddForm
  })

    render () {
      const {
        filterText,
        isStockOnly,
        hideAddForm
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
          <AddProductButton/>
          <AddProductForm 
            hideAddForm={hideAddForm}
            hideAddProductForm={this.hideAddProductForm}
            showAddProductForm={this.showAddProductForm}
            
            />
        </div>
      )
    }
  }
  
  export default FilterableProductTable