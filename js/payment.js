(function($) {

    var form = $("#signup-form");
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous : 'رجوع',
            next : 'تابع عملية الدفع',
            finish : 'اتمام',
            current : ''
        
        },
        titleTemplate : '<div class="title"><span class="title-text">#title#</span><span class="title-number">0#index#</span></div>',
        onFinished: function (event, currentIndex)
        {
            alert('Sumited');
        }
    });
    
    
})(jQuery);

$('.fa-chevron-down').click(function(e){
    var x = $(this).offsetParent()
    if (x.hasClass('opened')) {
        x.removeClass('opened')  
    }
    else{
        x.addClass('opened')
    }
    var content = x[0].lastElementChild
    $(content).toggle()
   
})
$('.fa-chevron-down').hover(function(e){
    var x = $(this).offsetParent()
    if (x.hasClass('opened')) {
        x.removeClass('opened')  
    }
    else{
        x.addClass('opened')
    }
    var content = x[0].lastElementChild
    $(content).toggle()
   
})

