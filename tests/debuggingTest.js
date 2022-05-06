module.exports = {
    "should find results when searching for 'applitools'": () => {
        const ComplicatedPage = browser.page.complicatedPAge();
        const SearchPage = browser.page.searchPage();

        ComplicatedPage
            .navigate()
            .search('applitools')
            .verify.urlContains('/?s')
        SearchPage
            .getText('@post', (result) => {
                browser.pause()
                browser.assert.equal(result.value, 'Applitools Bugs and Test Steps')
            });
    }
}