const FollowToggle = require('./follow_toggle.js');
const $buttons = $('.follow-toggle');
$( document ).ready($buttons.each(function(el) {
  new FollowToggle(el);
}));