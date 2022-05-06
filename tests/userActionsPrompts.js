module.exports = {
    "Should perform key strokes": () => {
        browser.
            /*url('https://ultimateqa.com/filling-out-forms/', () => {
                console.log(JSON.stringify(browser.Keys,null,'\t'))
            })*/
            url('https://ultimateqa.com/filling-out-forms/').
            setValue('#et_pb_contact_message_0', 'testing key 123').
            keys(browser.Keys.BACK_SPACE).
            keys(browser.Keys.BACK_SPACE).
            keys(browser.Keys.ENTER).
            keys(browser.Keys.SUBTRACT)
    },
    "Should perform right click": () => {
        //tutorial function deprecated, better to check https://nightwatchjs.org/api/useractions/
        browser.
            perform(function () {
                const actions = this.actions({ async: true });
                return actions
                    .contextClick()
            }).
            pause(3000);
    },
    "Should perform window actions": () => {
        browser.openNewWindow('tab').
            fullscreenWindow().
            pause(1000).
            windowHandles((results) => {
                const newWindow = results.value[1];
                browser.switchWindow(newWindow)
            })
            .pause(3000);
    },
    "Should interact with alerts": (client) => {
        browser.url("http://demo.automationtesting.in/Alerts.html").
            click('#OKTab button').
            getAlertText((results) => {
                console.log(results.value);
            }).
            acceptAlert().
            pause(2000)
    }
}
/**
 * {
        "NULL": "",
        "CANCEL": "",
        "HELP": "",
        "BACK_SPACE": "",
        "TAB": "",
        "CLEAR": "",
        "RETURN": "",
        "ENTER": "",
        "SHIFT": "",
        "CONTROL": "",
        "ALT": "",
        "PAUSE": "",
        "ESCAPE": "",
        "SPACE": "",
        "PAGE_UP": "",
        "PAGE_DOWN": "",
        "END": "",
        "HOME": "",
        "ARROW_LEFT": "",
        "LEFT": "",
        "ARROW_UP": "",
        "UP": "",
        "ARROW_RIGHT": "",
        "RIGHT": "",
        "ARROW_DOWN": "",
        "DOWN": "",
        "INSERT": "",
        "DELETE": "",
        "SEMICOLON": "",
        "EQUALS": "",
        "NUMPAD0": "",
        "NUMPAD1": "",
        "NUMPAD2": "",
        "NUMPAD3": "",
        "NUMPAD4": "",
        "NUMPAD5": "",
        "NUMPAD6": "",
        "NUMPAD7": "",
        "NUMPAD8": "",
        "NUMPAD9": "",
        "MULTIPLY": "",
        "ADD": "",
        "SEPARATOR": "",
        "SUBTRACT": "",
        "DECIMAL": "",
        "DIVIDE": "",
        "F1": "",
        "F2": "",
        "F3": "",
        "F4": "",
        "F5": "",
        "F6": "",
        "F7": "",
        "F8": "",
        "F9": "",
        "F10": "",
        "F11": "",
        "F12": "",
        "COMMAND": "",
        "META": "",
        "ZENKAKU_HANKAKU": ""
}
 */