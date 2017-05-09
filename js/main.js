/**
 * Created by dungtrnhdnh on 5/9/17.
 */

jQuery(document).ready(function () {
    jQuery('.page-index .block-featured-list li').click(function () {
        jQuery(this).parent().find('.img-wrapper').removeClass('active');
        jQuery(this).find('.img-wrapper').addClass('active');
        console.log(jQuery(this));
        jQuery(this).find('input').prop("checked", true);
    });
});