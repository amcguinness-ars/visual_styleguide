/**
 * File: main.js
 * Description: the main JS file for this experience
 * Dependencies: jQuery
 *
 * @package style_guide
 */

$(function() {
   $('a.filter').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
   });  
});
