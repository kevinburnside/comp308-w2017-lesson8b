// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');



module.exports.DisplayHome = function(req, res){
    res.render('content/index', {
    title: 'Home',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}