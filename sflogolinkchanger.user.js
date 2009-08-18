// SF Logo link changer
// Orius
//
// SF, 2009
//
// ==UserScript==
// @name          SF Logo Link Changer
// @namespace     http://shiningforce.net/
// @description   Turns the SF logo on the forums into a link to the blog, rather than forum index
// @include       http://www.shiningforce.net/phpBB3/*
// ==/UserScript==

// Get the logo container
var container = document.getElementById('logodesc');

// The container only has 1 anchor element, so we can just assume it is the one we want to change.
var link = container.getElementsByTagName('a')[0];


// Change target to the /blog directory
link.href = "/blog";