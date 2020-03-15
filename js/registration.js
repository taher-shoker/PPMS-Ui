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

        $("#js-wizard-form").bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn--next',
            'nextSelector': '.btn--next',
            'previousSelector': '.btn--back',
          
            onNext: function(tab, navigation, index) {
              /*   var $valid = $("#js-wizard-form").valid();
                if(!$valid) {
                    $validator.focusInvalid();
                    return false;
                } */
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
    
    }
    catch (e) {
        console.log(e)
    }

})(jQuery);


    $('#login').click(function(){
         window.location.replace('login.html')
        
      })


/*****/


