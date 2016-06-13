var pug = require('pug');


module.exports = {
    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% myTag %}World{% endMyTag %}"
        pug: {
            process: function(blk) {
                return pug.render(blk.body, {pretty: true} );
            }
        }
    },

};
