import React from 'react'
import PropTypes from 'prop-types';

class AddProductButton extends React.Component {
  showAddProductForm = (e) => {
    return this.props.showAddProductForm()
  }

  render() {
    return (
      <input 
        type="button" 
        value="Add product"
        onChange={this.showAddProductForm}
        onClick={this.showAddProductForm}/>
    )
  }
}

AddProductButton.propTypes = {
  showAddProductForm: PropTypes.func.isRequired
};

export default AddProductButton