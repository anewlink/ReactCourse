import React from 'react';
import PropTypes from 'prop-types';

class AddProductForm extends React.Component {

  hideAddProductForm = (e) => {
    return this.props.hideAddProductForm()
  }
  
  showAddProductForm = (e) => {
    return this.props.showAddProductForm()
  }
  
  render() {


    return (
      <div>
        <input 
          type="button" 
          value="Add product"
          onChange={this.showAddProductForm}
          onClick={this.showAddProductForm} />
        <form
          hidden={this.props.hideAddForm}
          /* onChange={this.addProductFormViewChanged} */
        >
          <h4>ADD A PRODUCT</h4>
          
          <p>
            Please fill the data requested in this dialog to add a product to
            our table, including product Name, price and Category.
          </p>
          <input type="text" placeholder="Product Name" />
          <input type="text" placeholder="Price" />
          <input type="text" placeholder="Category" />
          <input type="button" value="Cancel" />
          <input type="button" value="Add" />
        </form>
      </div>
    );
  }
}

/* function onCancel() {
  console.log('on cancel');
}

function onAdd() {
  console.log('on add');
} */

AddProductForm.propTypes = {
  hideAddForm: PropTypes.bool.isRequired,
  hideAddProductForm: PropTypes.func.isRequired,
  showAddProductForm: PropTypes.func.isRequired
};

export default AddProductForm;
