module.exports = {
    "Expect library demo test": () => {
        browser.
            url("https://ultimateqa.com/filling-out-forms/").
            verify.not.visible('button[name="et_builder_submit_button"]:nth-child(1)').
            assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    },
    "Should assert form field value": () => {
        browser.setValue('#et_pb_contact_name_0', 'Carlos Tito')
            .assert.valueContains('#et_pb_contact_name_0', 'Carlos')
        //.verify.value('#et_pb_contact_name_0', 'Carlos')
    },
    "Should assert current url": () => {
        browser.
            assert.urlEquals("https://ultimateqa.com/filling-out-forms/")
    },
    "Should assert title": () => {
        browser.verify.titleEquals("Filling Out Forms | Ultimate QA")

    },
    "Should assert attribute contains": () => {
        browser.verify.attributeContains("#et_pb_contact_name_0", "placeholder", "Name")
    },
    "Should assert contains text": () => {
        browser.verify.textContains('button[name="et_builder_submit_button"]:nth-child(1)', 'Submit')
    },
    "Should assert CSS class": () => {
        browser.verify.cssClassPresent('#et_pb_contact_name_0', 'input')
    }
}