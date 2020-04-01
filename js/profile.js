


//======

$(window).on('scroll',function() {
    $('.card .sparkline').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("pullUp");
        }
    });
});
//======

/* if ($('#view_module').hasClass('active')) {
   
    $('#view_module').css('display', 'flex')
}
 */


 /************** script edit profile*************/
 (function ($) {
    'use strict';

    /*[ Wizard Config ]
        ===========================================================*/
    
    try {
        var $validator = $("#js-wizard-form").validate({
            rules: {
                firstName: {
                    required: true,
                  //  minlength: 3
                },
                lastName: {
                    required: true,
                  
                },
                mail: {
                    required: true,
                    email: true,
                   
                },
                image:{
                    required: true,
                },
                pass: {
                    required: true,
                    minlength: 8
                },
               
            },
            messages: {
                firstName: {
                    required: "أدخل الاسم الاول"
                },
                lastName: {
                    required: "أدخل الاسم الاخير"
                },
    
                email: {
                    required: "أدخل البريد الالكترونى",
                    email: "البريد الالكترونى غير صحيح"
    
                },
                pass: {
                    required: "ادخل كلمة مرور لا تقل عن 8 حروف او ارقام",
                    minlength: "ادخل كلمة مرور لا تقل عن 8 حروف او ارقام"
                },
                image: {
                    required: "ادخل صورة شخصية من اجل  التحقق من الهوية",
                 
                }
            }
        });

     
    
    }
    catch (e) {
        console.log(e)
    }

})(jQuery);

$("#js-wizard-form").bootstrapWizard({
    'tabClass': 'nav nav-pills',
    'nextSelector': '.btn--next',
    'previousSelector': '.btn--back',
    'finishSelector' : '.btn-finish',
  
    onNext: function(tab, navigation, index) {
      /*   var $valid = $("#js-wizard-form").valid();
        if(!$valid) {
            $validator.focusInvalid();
            return false;
        } */
      },
      onFinish : function(tab, navigation, index) {
     alert('تم اكمال البيانات')
        },
   /*  'onNext': function(tab, navigation, index){
      
        if(tab == 'tab1'){
            return   console.log('one') 
            } else if(tab =='tab2'){
                console.log('two')
            } else if(tab == 'tab2'){
              return  console.log('three')
            }
    }, */
    onPrevious: function(tab, navigation, index) {
    }, 
    'onTabClick': function (tab, navigation, index) {
      return false
    }

});
    $('#login').click(function(){
         window.location.replace('login.html')
        
      })
  
    $(document).ready(function() {
        $("#types-ability").change(function() {
    
         
            var selectedVal = $("#types-ability option:selected").val();
         if (selectedVal == 4) {
             $('.type-ability-txt').show()
         }else{
            $('.type-ability-txt').hide()
         }
    
        });
    });


/*****/
