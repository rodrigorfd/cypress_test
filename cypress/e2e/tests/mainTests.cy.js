/// <reference types="Cypress"/>

import * as homePageObjects from "../objects/homePageObjects"
import * as searchPageObjects from '../objects/searchPageObjects'
import * as cartPageObjects from '../objects/cartPageObjects'

describe('Add an item to cart', () => {

    it('Do a search', () => {

        homePageObjects.goToHome()

        homePageObjects.doASearch('dress')

        searchPageObjects.addToCart()

        searchPageObjects.goToCart()

        cartPageObjects.confirmCartItem()

    });
})