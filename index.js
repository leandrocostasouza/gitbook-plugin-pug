var pug = require('pug');


module.exports = {
    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% myTag %}World{% endMyTag %}"
        pug: {
            process: function(blk) {
                // render 
                //pretty=true
                return html = pug.render(blk.body, );
            }
        }
    },

};
