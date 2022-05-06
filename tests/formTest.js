module.exports = {
    beforeEach: () => {
        browser.url(`${browser.launch_url}/filling-out-forms/`)
    },

    "Should successfully fill the left form": () => {
        browser
            .verify.titleEquals('Filling Out Forms | Ultimate QA')
            .setValue('#et_pb_contact_name_0', 'Carlos Tito')
            .setValue('#et_pb_contact_message_0', 'Lorem Ipsum')
            .submitForm('#et_pb_contact_form_0 form')
            .expect.element('#et_pb_contact_form_0').text.to.be.equal('Thanks for contacting us')
    },
    "Should verify error message when the left form is not filled out and submitted": () => {
        browser
            .submitForm('#et_pb_contact_form_0 form')
            .verify.textMatches('#et_pb_contact_form_0 > div:nth-child(1)', 'Make sure you fill in all required fields')

    },
    "Should successfully fill out the left form using - Page Object": () => {
        const formPage = browser.page.formPage();
        const rightForm = formPage.section.rightForm;

        formPage
            .navigate()
            .verify.title('Filling Out Forms | Ultimate QA')
            .enterNameMessage('Carlos Tito', 'Dummy text')
            .pause(2000)
            .submitLeftForm()
            .verify.textMatches('@lblLeftFormMessage', "Thanks for contacting us")

        rightForm.expect.element('@txtName').to.be.visible
    },
    after: () => {
        browser.end();
    }
}