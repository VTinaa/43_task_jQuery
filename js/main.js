
$('#slide1, #slide2, #slide3, #slide4, #slide5, #slide6, #slide7, #slide8').on('input',function(){
    let slide1 = $('#slide1').val();
    let slide2 = $('#slide2').val();
    let slide3 = $('#slide3').val();
    let slide4 = $('#slide4').val();
    let slide5 = $('#slide5').val();
    let slide6 = $('#slide6').val();
    let slide7 = $('#slide7').val();
    let slide8 = $('#slide8').val();
    // $('#output').css('filter',slide1 + '% ' + slide2 + '% ' + slide3 + '% ' + slide4 + '% ' + slide5 + '% ' + slide6 + '% ' + slide7 + '% ' + slide8 + '% ');
    $('#output').css('filter', `grayscale(${slide1}%) sepia(${slide2}%) blur(${slide3}px) invert(${slide4}%) opacity(${slide5}%) brightness(${slide6}%) contrast(${slide7}%) saturate(${slide8}%)`);
    // $('#box').val('filter: ' + slide1 + '% ' + slide2 + '% ' + slide3 + 'px ' + slide4 + '% ' + slide5 + '% ' + slide6 + '% ' + slide7 + '% ' + slide8 + '% ');
    $('#box').val(`filter: grayscale(${slide1}%) sepia(${slide2}%) blur(${slide3}px) invert(${slide4}%) opacity(${slide5}%) brightness(${slide6}%) contrast(${slide7}%) saturate(${slide8}%)`);



    // filter: grayscale(), sepia(), blur(), invert(), opacity(), brightness(), contrast(), saturate();
    // border-radius: 50% 20% 10% 5%
})