const { throws } = require('assert');
const fs = require('fs')
module.exports = {
    //Executed before selenium session is created
    before: (done) => {
        console.log('before all global')
        done();
    },
    //Executed after closing the selenium session
    after: (done) => {
        console.log('after all global')
        done();
    },
    beforeEach: (done) => {
        console.log('beforeEach global')
        browser.status(result => {
            console.log(result.value)
            done();
        })
    },
    afterEach: (done) => {
        console.log('afterEach global')
        //console.log(browser.currentTest)
        done()
    },
    reporter: (results, done) => {
        fs.writeFile('testResult.json', JSON.stringify(results, null, '\t'), (err) => {
            if (err) throw err;
            console.log('report saved')
            done()
        })
    }
}