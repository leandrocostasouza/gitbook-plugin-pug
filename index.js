var pug = require('pug');
var fs = require('fs');
var mixin;


module.exports = {
    hooks: {
        init: function() {
             try{
                 mixin = fs.readFileSync(this.options.pluginsConfig.pug.mixin, 'utf8');
             } catch ( e ){
                 mixin = false;
             }
             
        }
    },    
    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% myTag %}World{% endMyTag %}"
        pug: {
            process: function(blk) {
                if(mixin){
                    return pug.render(mixin+blk.body, {pretty: true} );    
                }
                return pug.render(blk.body, {pretty: true} );
            }
        }
    },
};
