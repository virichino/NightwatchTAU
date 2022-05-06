module.exports = {
    "Expect library demo test": () => {
        browser.
            url("https://ultimateqa.com/filling-out-forms/").
            expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.to.equal('Submit')
    },
    "Should assert form field value": () => {
        browser.setValue("#et_pb_contact_name_0", 'Dimitri Harding')
        browser.expect.element("#et_pb_contact_name_0").to.have.value.which.equal("Dimitri Harding")

    },
    "Should assert the current URL": () => {
        browser.expect.url().to.equal('https://ultimateqa.com/filling-out-forms/')
    },
    "Should assert title of current page": () => {
        browser.expect.title().to.contains('Filling Out Forms')
    },
    "Should assert attribute contains expected value": () => {
        browser.expect.element('#et_pb_contact_name_0').to.have.attribute('placeholder').which.contains('Name')
    },
    "Should assert containing text": () => {
        browser.expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.equal('Submit')
    },
    "Should assert CSS class": () => {
        browser.expect.element('#et_pb_contact_name_0').text.have.attribute('class').which.startWith('in')
    }
}