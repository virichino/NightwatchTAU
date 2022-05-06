describe("Forms suite", function () {
    it("should fill out form successfully", function () {
        const formPage = browser.page.formPage();

        formPage
            .navigate()
            .verify.title('Filling Out Forms | Ultimate QA')
            .enterNameMessage('Carlos Tito', 'Dummy text')
            .submitLeftForm('@form')
            .verify.textMatches('@lblLeftFormMessage', "Thanks for contacting us")
    })
})