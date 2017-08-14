
const name = 'Scotch.io';

import _ from 'underscore';
import tungsten from 'tungstenjs';
var View = tungsten.View;
var Model = tungsten.Model;
//var AppView = require('./views/temp_view');
//var AppModel = require('./models/temp_model');
import template from './temp.mustache'

//setTimeout(() => alert(`Hello there from ${name}`), 300);document.write(require("./content.js"));
var elem = document.getElementById('appwrapper');
window.app = module.exports = new View({
    el: elem,
    template: template,
    model: new Model({name: 'world'}),
    dynamicInitialize: true
});

var router = require('./app_router');
router.init(window.app);