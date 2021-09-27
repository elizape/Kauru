$(document).ready(function () {
    $('.categories .category-item[category="all"]').addClass('ct-item-active');

    $('.category-item').click(function () {
        var categoryProduct = $(this).attr('category');

        $('.category-item').removeClass('ct-item-active');
        $(this).addClass('ct-item-active');


        $('.object-container').css('opacity', '0');
        function hideProduct() {
            $('.object-container').hide();
        } setTimeout(hideProduct, 400);

        function showProduct() {
            $('.object-container[category="' + categoryProduct + '"]').show();
            $('.object-container[category="' + categoryProduct + '"]').css('opacity', '1');
        } setTimeout(showProduct, 400);
    });

    $('.category-item[category="all"]').click(function () {
        function showAll() {
            $('.object-container').show();
            $('.object-container').css('opacity', '1')
        } setTimeout(showAll, 400);

    });

});