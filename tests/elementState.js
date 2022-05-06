module.exports = {
    'demo test': function () {
        browser.
            url('https://ultimateqa.com/filling-out-forms/').
            getText('button[name = "et_builder_submit_button"]', (resultText) => {
                console.log(resultText.value);
            }).
            setValue('#et_pb_contact_message_0', 'testing value').
            getValue('#et_pb_contact_message_0', (resultText) => {
                console.log(resultText.value);
            }).
            isVisible('#et_pb_contact_message_0', (visible) => {
                console.log(visible.value);
            })
    }
}