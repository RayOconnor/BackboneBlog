
var View = tungsten.View, Model = tungsten.Model;
new View({
    el: document.getElementById('app'),
    template: compiledTemplates.app_view,
    model: new Model({name: 'world'}),
    dynamicInitialize: true
});

module.exports = View;