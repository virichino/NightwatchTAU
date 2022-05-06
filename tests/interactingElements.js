module.exports = {
    "Setting values into input elements demo": () => {
        browser.url("https://ultimateqa.com/filling-out-forms/").
        waitForElementVisible('#et_pb_contact_name_0').
        setValue('#et_pb_contact_name_0','carlos testing').
        pause(2000).
        clearValue('#et_pb_contact_name_0').
        setValue('#et_pb_contact_name_0','carlos testing two').
        pause(2000).
        clearValue('#et_pb_contact_name_0')
    },

    "Moving mouse over elements demo": () => {
        browser.url("https://ultimateqa.com/filling-out-forms/").
        waitForElementVisible('button[name="et_builder_submit_button"]:nth-child(1)').
        moveToElement('button[name="et_builder_submit_button"]:nth-child(1)', 10, 10).
        pause(2000)
    }
}