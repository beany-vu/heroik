/**
 * Created by dungtrnhdnh on 5/9/17.
 */

jQuery(document).ready(function () {
    jQuery('.page-index .block-featured-list li.item').click(function () {
        jQuery(this).parent().find('.img-wrapper').removeClass('active');
        jQuery(this).find('.img-wrapper').addClass('active');
        jQuery(this).find('input').prop("checked", true);
    });

    jQuery('.page-business .block-featured-list li.item button').click(function (event) {
        event.preventDefault();
        jQuery(this).parent().parent().parent().find('li.item').removeClass('active');
        jQuery(this).parent().parent().addClass('active');
        jQuery(this).prev('input').prop("checked", true);
        // console.log(jQuery("form").serialize());
    });

    jQuery('.page-type form .item button').click(function (event) {
        event.preventDefault();
        jQuery(this).parent().parent().parent().next('input').val(jQuery(this).data('value'));
    });
});