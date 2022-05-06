const elements = {
    post: '#post-6917'
};

const commands = [

];

module.exports = {
    elements: elements,
    commands: commands,

    url: function () {
        return `${this.api.launchUrl}/?s`
    }
}