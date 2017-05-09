/**
 * Created by dungtrnhdnh on 5/9/17.
 */

jQuery(document).ready(function () {
    jQuery('.niche_title').html(localStorage.getItem('niche'));
    jQuery('.business_title').html(localStorage.getItem('business'));
    jQuery('.color_title').html(localStorage.getItem('color'));
    jQuery('.type_title').html(localStorage.getItem('type'));
});