/// <reference types="Cypress"/>

class SearchPageElements {
    firstItem = () => { return '[title="Add to cart"]' }
    goToCart = () => { return '[title="Proceed to checkout"]' }
}

export default SearchPageElements;