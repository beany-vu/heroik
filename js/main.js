/**
 * Created by dungtrnhdnh on 5/9/17.
 */

jQuery(document).ready(function () {
    jQuery('.page-index .block-featured-list li.item').click(function () {
        jQuery(this).parent().find('.img-wrapper').removeClass('active');
        jQuery(this).find('.img-wrapper').addClass('active');
        jQuery(this).find('input').prop("checked", true);
        localStorage.setItem('niche', jQuery(this).find('input').val());
    });

    jQuery('.page-business .block-featured-list li.item button').click(function (event) {
        event.preventDefault();
        jQuery(this).parent().parent().parent().find('li.item').removeClass('active');
        jQuery(this).parent().parent().addClass('active');
        jQuery(this).prev('input').prop("checked", true);
        localStorage.setItem('business', jQuery(this).prev('input').val());
    });

    jQuery('.page-business .block-featured-list li.item').click(function (event) {
        event.preventDefault();
        jQuery(this).parent().find('li.item').removeClass('active');
        jQuery(this).addClass('active');
        jQuery(this).find('input').prop("checked", true);

        localStorage.setItem('business', jQuery(this).find('input').val());
        // console.log(jQuery("form").serialize());
    });

    jQuery('.page-type form .item button').click(function (event) {
        event.preventDefault();
        var input = jQuery(this).parent().parent().parent().parent().parent().next('input');
        input.val(jQuery(this).data('value'));
        localStorage.setItem('type', input.val());
    });

    jQuery('.block-slider').slick({
        'prevArrow': '<i class="material-icons slick-prev">arrow_back</i>',
        'nextArrow': '<i class="material-icons slick-next">arrow_forward</i>'
    });

    jQuery('.page-color .item button').click(function (event) {
        event.preventDefault();
        var input = jQuery(this).parent().parent().parent().parent().parent().next('input');
        input.val(jQuery(this).data('value'));
        localStorage.setItem('color', input.val());
    });
});