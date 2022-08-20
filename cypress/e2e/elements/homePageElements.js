/// <reference types="Cypress"/>

class HomePageElements {
    textBoxSearch = () => { return '[id="search_query_top"]' }
    btnSearch = () => { return '[name="submit_search"]' }
    searchResult = () => { return '[class="lighter"]' }
}

export default HomePageElements;