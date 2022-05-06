const data = require('../global/data')

describe("Forms suite", function () {
    data.forEach(({ testCase, name, message, screenshotFileName, expected }) => {
        it(testCase, () => {
            const formPage = browser.page.formPage();

            formPage
                .navigate()
                .verify.title('Filling Out Forms | Ultimate QA')
                .enterNameMessage(name, message)
                .submitLeftForm('@form')
                .saveScreenshot(screenshotFileName)
                .verify.textMatches('@lblLeftFormMessage', expected)


        })
    })
})