module.exports = {
    //this is ran before the suit is executed
    before: () => {
        console.log('starting up')

    },
    //this is ran after the suit is executed
    after: () => {
        console.log('closing down')
    },
    //this is ran before each test within our site
    beforeEach: () => {
        browser.url('https://ultimateqa.com/filling-out-forms/')
    },
    //this will be run after each test within our site
    afterEach: () => {
        console.log('text completed')
    },

    "Should verify page title": () => {
        browser.expect.title().to.contains("Filling Out")
    },
    "Should verify page url": () => {
        browser.expect.url().which.contains('filling-out-forms')
    }

}