/// <reference types="Cypress"/>

import * as homePageObjects from "../objects/homePageObjects"

describe('Add an item to cart', () => {

    it('Do a search', () => {

        homePageObjects.goToHome()

        homePageObjects.doASearch('dress')

    });
})