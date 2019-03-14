import React from 'react';
import PropTypes from 'prop-types';

class AddProductForm extends React.Component {
  hideAddProductForm = e => {
    return this.props.hideAddProductForm();
  };

  addProductFormViewChanged = e => {
    return this.props.addProductFormViewChanged();
  };

  addProductNameChanged = e => {
    return this.props.addProductNameChanged(e);
  };

  addProductPriceChanged = e => {
    return this.props.addProductPriceChanged(e.target.value);
  };

  addProductCategoryChanged = e => {
    return this.props.addProductCategoryChanged(e);
  };

  render() {
    return (
      <div>
        <form
          hidden={this.props.hideAddForm}
        >
          <h4>ADD A PRODUCT</h4>

          <p>
            Please fill the data requested in this dialog to add a product to
            our table, including product Name, price and Category.
          </p>
          <input
            id="product-name"
            name="product-name"
            type="text"
            placeholder="Product Name"
            onChange={event => this.addProductNameChanged(event)}
            value={this.props.name}
          />
          <input
            id="product-price"
            name="product-price"
            type="number"
            placeholder="Price"
            min="0"
            step=".01"
            pattern="^\d*(\.\d{0,2})?$"
            onChange={this.addProductPriceChanged}
            value={this.props.price}
          />
          <input
            id="product-category"
            name="product-category"
            type="text"
            placeholder="Category"
            onChange={event => this.addProductCategoryChanged(event)}
            value={this.props.category}
          />
          <input
            type="button"
            value="Cancel"
            onClick={this.hideAddProductForm}
          />
          <input
            type="button"
            value="Add"
            onClick={this.addProductFormViewChanged}
          />
        </form>
      </div>
    );
  }
}

AddProductForm.propTypes = {
  hideAddForm: PropTypes.bool.isRequired,
  hideAddProductForm: PropTypes.func.isRequired,
  addProductNameChanged: PropTypes.func.isRequired,
  addProductPriceChanged: PropTypes.func.isRequired,
  addProductCategoryChanged: PropTypes.func.isRequired,
  addProductFormViewChanged: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default AddProductForm;
