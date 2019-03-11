import React from 'react';

const AddProductForm = () => {
  return (
    <form>
      <h4>ADD A PRODUCT</h4>
      <p>
        Please fill the data requested in this dialog to add a product to our
        table, including product Name, price and Category.
      </p>
      <input type="text" placeholder="Product Name" />
      <input type="text" placeholder="Price" />
      <input type="text" placeholder="Category" />
      <input type="button" value="Cancel" />
      <input type="button" value="Add" />
    </form>
  );
};

/* function onCancel() {
  console.log('on cancel');
}

function onAdd() {
  console.log('on add');
} */

export default AddProductForm;
