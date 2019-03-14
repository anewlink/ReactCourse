import React, { Component } from 'react';
import { fetchProducts } from './services/products';
import FilterableProductTable from './components/FilterableProductTable';
import AddProductButton from './components/AddProductButton';
import AddProductForm from './components/AddProductForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsRes: {
        products: [],
        errMess: null,
        isLoading: true
      },
      newProduct: {
        category: '',
        price: '',
        stocked: false,
        name: '',
        hideAddForm: true
      }
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  updateProduct = () => {
    const { productsRes, newProduct } = this.state;
    newProduct.price = '$'.concat(newProduct.price);
    productsRes.products.push(newProduct);
    this.setState({ productsRes });
  };

  addProductFormViewChanged = () => {
    const { productsRes, newProduct } = this.state;
    newProduct.price = '$'.concat(newProduct.price);
    productsRes.products.push(newProduct);
    const product = { ...newProduct };
    this.newProductInit(product);
    this.setState({
      productsRes,
      newProduct: product
    });
  };

  addProductNameChanged = event => {
    const newProduct = { ...this.state.newProduct };
    newProduct.name = event.target.value;
    this.setState({ newProduct });
  };

  addProductPriceChanged = newValue => {
    const newProduct = { ...this.state.newProduct };
    newProduct.price = newValue;
    this.setState({ newProduct });
  };
  addProductCategoryChanged = event => {
    const newProduct = { ...this.state.newProduct };
    newProduct.category = event.target.value;
    this.setState({ newProduct });
  };

  hideAddProductForm = () => {
    let { newProduct } = this.state;
    this.newProductInit(newProduct);
    this.setState(newProduct);
  };

  newProductInit = newProduct => {
    newProduct.category = '';
    newProduct.price = '';
    newProduct.stocked = false;
    newProduct.name = '';
    newProduct.hideAddForm = true;
  };

  //finished
  showAddProductForm = () => {
    const { newProduct } = this.state;
    newProduct.hideAddForm = false;
    this.setState({ newProduct });
  };

  fetchProducts = async () => {
    const response = await fetchProducts();

    const productsRes = response.error
      ? {
          products: [],
          errMess: response.message,
          isLoading: false
        }
      : {
          products: response,
          errMess: null,
          isLoading: false
        };

    this.setState({ productsRes });
  };

  render() {
    const { productsRes, newProduct } = this.state;

    return (
      <div className="MyReactApp">
        <FilterableProductTable {...productsRes} />
        <AddProductButton showAddProductForm={this.showAddProductForm} />
        <AddProductForm
          {...newProduct}
          hideAddProductForm={this.hideAddProductForm}
          addProductNameChanged={this.addProductNameChanged}
          addProductPriceChanged={this.addProductPriceChanged}
          addProductCategoryChanged={this.addProductCategoryChanged}
          addProductFormViewChanged={this.addProductFormViewChanged}
        />
      </div>
    );
  }
}

export default App;
