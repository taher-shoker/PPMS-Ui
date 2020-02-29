
    $("#js-wizard-form").validate({
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
            pass: {
                required: true,
                minlength: 8
            },
            pass2: {
                required: true,
                minlength: 8,
                equalTo: '#pass'
            }
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
            pass2: {
                required: "اادخل كلمة مرور لا تقل عن 8 حروف او ارقام ",
                minlength: "ادخل كلمة مرور لا تقل عن 8 حروف او ارقام",
                equalTo: "ادخل كلمة مرور مشابهة",
            }
        }
    })
