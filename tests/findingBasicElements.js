module.exports = {
    'demo test': function () {
        browser.
            url('https://ultimateqa.com/filling-out-forms/').
            elements('css selector', 'input[type = "text"]', function (result) {
                console.log(result.value)
            });
    },

    'demo test button': function () {
        browser.
            url('https://ultimateqa.com/filling-out-forms/').
            //waitForElementNotVisible('button[name="et_builder_submit_button"]')
            waitForElementVisible('button[name="et_builder_submit_button"]','"Submit button is visible"')
    }
}