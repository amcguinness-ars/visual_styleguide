/**
 * File: main.js
 * Description: the main JS file for this experience
 * Dependencies: jQuery
 *
 * @package style_guide
 */

$(function() {
    // click event for filters
    $('a.filter').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    
    // click event for tabs
    $('.tab').click(function(e) {
        !$(this).hasClass('active') && $(this).addClass('active').siblings('.tab').removeClass('active');
        $(this).parent('.tabs').next('.tabs-content').children('.tab' + ($(this).index() + 1)).addClass('active').siblings('div').removeClass('active');
    });
});
