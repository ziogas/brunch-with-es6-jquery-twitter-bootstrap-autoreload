// See http://brunch.io for documentation.
exports.files = {
    javascripts: {
        joinTo: {
            'app.js': /^app/,
            'vendor.js': /^node_modules/
        }
    },
    stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
    babel: {presets: ['latest', 'stage-0']},
    copycat: {fonts: ['node_modules/bootstrap/dist/fonts'], onlyChanged: true}
};

exports.npm = {
    enabled: true,
    globals: {
        jQuery: 'jquery',
        $: 'jquery',
        bootstrap: 'bootstrap'
    },
    styles: {
        bootstrap: ['dist/css/bootstrap.css']
    }
};
