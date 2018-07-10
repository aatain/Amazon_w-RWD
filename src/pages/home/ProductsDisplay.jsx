import React from 'react';
import RowOne from './productsDisplay/RowOne.jsx';
import RowTwo from './productsDisplay/RowTwo.jsx';

const ProductsDisplay = props => (
    <div id="productsDisplay">
        <RowOne />
        <RowTwo />
    </div>
);

export default ProductsDisplay;