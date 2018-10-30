$(document).ready(function () {
    //    затемнення екрану 
    $('.shadow').css({
        height: innerHeight
    });

    function animateMenu(b) {
        var l = $('.menu_style_ul li').size();
        for (var i = 0; i <= l; i++) {
            if (i == b) {
                $('.' + i + '_click').animate({
                    height: '70px'
                });
            }
            else {
                $('.' + i + '_click').animate({
                    height: '0px'
                });
            }
        }
    }
    /*open pages*/
    $('.chooseHome').click(function () {
        animateMenu(0);
        $('.homePage').css({
            display: 'block'
        });
        $('.itemsPage, .menPage, .womanPage, .boyPage, .girlPage, .plusPage, .contactPage').css({
            display: 'none'
        });
    });
    $('.chooseMen').click(function () {
        animateMenu(1);
        $('.womanPage, .girlPage, .homePage, .boyPage, .plusPage, .contactPage ').css({
            display: 'none'
        });
        $('.women_list, .plus_list, .girl_list, .boy_list').css({
            display: 'none'
        });
        $('.itemsPage, .men_list, .menPage').css({
            display: 'block'
        });
        $('.menPage').css({
            height: "auto"
        });
    });
    $('.chooseWoman').click(function () {
        animateMenu(2);
        $('.homePage, .menPage, .boyPage, .girlPage, .plusPage, .contactPage').css({
            display: 'none'
        });
        $('.womanPage, .itemsPage, .women_list').css({
            display: 'block'
        });
        $('.boy_list, .men_list, .plus_list,.girl_list').css({
            display: 'none'
        });
        $('.womanPage').css({
            height: "auto"
        });
    });
    $('.chooseGirl').click(function () {
        animateMenu(3);
        $('.homePage, .menPage, .boyPage, .womanPage, .plusPage, .contactPage').css({
            display: 'none'
        });
        $('.men_list,.women_list, .plus_list, .boy_list').css({
            display: 'none'
        });
        $('.itemsPage, .girl_list, .girlPage').css({
            display: 'block'
        });
        $('.girlPage').css({
            height: "auto"
        });
    });
    $('.chooseBoy').click(function () {
        animateMenu(4);
        $('.homePage, .menPage, .womanPage, .plusPage, .girlPage, .contactPage').css({
            display: 'none'
        });
          $('.men_list, .women_list, .plus_list, .girl_list').css({
            display: 'none'
        });       
        $('.itemsPage, .boyPage, .bou_list').css({
            display: 'block'
        });
        $('.boyPage').css({
            height: "auto"
        });
    });
    $('.choosePlus').click(function () {
        animateMenu(5);
        $('.homePage,.menPage, .womanPage, .boyPage, .girlPage, .contactPage').css({
            display: 'none'
        });
        $('.men_list, .women_list, .girl_list, .boy_list').css({
            display: 'none'
        });
        $('.itemsPage, .plus_list, .plusPage').css({
            display: 'block'
        });
        $('.plusPage').css({
            height: "auto"
        });
    });
    $('.chooseContacts').click(function () {
        animateMenu(6);
         $('.itemsPage, .menPage, .womanPage, .boyPage, .girlPage, .plusPage, .homePage').css({
            display: 'none'
        });
        $('.contactPage').css({
            display: 'block'
        });
        var text = document.getElementsByClassName("inputContact");
        for (var i = 0; i < text.length; i++) {
            text[i].value = '';
        }
        $('.labelMyName').css({
            top: '25px'
            , fontSize: '12px'
        })
        $('.labelmyEmail').css({
            top: '30px'
            , fontSize: '12px'
        })
        $('.labelMyMessage').css({
            top: '25px'
            , fontSize: '12px'
        });
        var a = innerHeight-155 + 'px';
           $('.contactPage').css({
            height: a
        });
    });
    $('.open_card').click(function () {
        $('.cartBlock').css({
            display: 'block'
            , top: '25%'
        });
        $('.shadow').css({
            display: 'block'
        });
    });
    $('.closeCart').click(function () {
        $('.cartBlock').css({
            top: '-50%'
        , });
        $('.shadow').css({
            display: 'none'
        });
    })
    $('.login').click(function () {
        $('.loginBlock').css({
            display: 'block'
            , top: '25%'
        });
        $('.shadow').css({
            display: 'block'
        })
    });
    $('.closeLogin').click(function () {
        $('.loginBlock').css({
            top: '-50%'
        , });
        $('.shadow').css({
            display: 'none'
        });
        $('.labelLogin').css({
            top: '55px'
            , fontSize: '11px'
        });
        $('.labelPass').css({
            top: '107px'
            , fontSize: '11px'
        });
        var text = document.getElementsByClassName("input_style");
        for (var i = 0; i < text.length; i++) {
            text[i].value = '';
        }
    });
    $('.forget').click(function () {
        $('.forgetBlock').css({
            display: 'block'
            , top: '30%'
        });
        $('.shadow').css({
            display: 'block'
        });
        $('.loginBlock').css({
            top: '-50%'
        , });
        $('.labelLogin').css({
            top: '55px'
            , fontSize: '11px'
        });
        $('.labelPass').css({
            top: '107px'
            , fontSize: '11px'
        });
    });
    $('.closeForget').click(function () {
        $('.forgetBlock').css({
            top: '-50%'
        , });
        $('.shadow').css({
            display: 'none'
        });
        $('.labelEmail').css({
            top: '55px'
            , fontSize: '11px'
        });
        var text = document.getElementsByClassName("emailClick")[0];
        text.value = '';
    });
    $('.enterR').click(function () {
        $('.registrationBlock').css({
            display: 'block'
            , top: '25%'
        });
        $('.shadow').css({
            display: 'block'
        });
    });
    $('.closeReg').click(function () {
        $('.registrationBlock').css({
            top: '-55%'
        , });
        $('.shadow').css({
            display: 'none'
        });
        $('.labelNewLogin').css({
            top: '80px'
            , fontSize: '11px'
        });
        $('.labelNewPass').css({
            top: '130px'
            , fontSize: '11px'
        });
        $('.labelNewEmail').css({
            top: '187px'
            , fontSize: '11px'
        });
        var text = document.getElementsByClassName("input_style");
        for (var i = 0; i < text.length; i++) {
            text[i].value = '';
        }
    });
    $('.singIn').click(function () {
        $('.sing_box').css({
            display: 'none'
        });
        $('.hello_box').css({
            display: 'flex'
        });
        $('.loginBlock').css({
            top: '-50%'
        , });
        $('.shadow').css({
            display: 'none'
        });
        var name = $('#name')[0].value;
        console.log(name);
        var span = document.createElement("span");
        span.innerHTML = name;
        $('.nameUser').append(span);
    });
    $('.img_exit').click(function () {
        $('.sing_box').css({
            display: 'flex'
        });
        $('.hello_box').css({
            display: 'none'
        });
        var text = document.getElementsByClassName("input_style");
        for (var i = 0; i < text.length; i++) {
            text[i].value = '';
        }
        $('.labelLogin').css({
            top: '55px'
            , fontSize: '11px'
        });
        $('.labelPass').css({
            top: '107px'
            , fontSize: '11px'
        });
    });
    $('.sendMailBtn').click(function () {
            alert('Your message is send!');
        })
        //cart
    $(function () {
        var goToCartIcon = function ($addTocartBtn) {
            var $cartIcon = $(".my-cart-icon");
            var $image = $('<img max-width="60px" height="60px" src="' + $addTocartBtn.data("image") + '"/>').css({
                "position": "fixed"
                , "z-index": "999"
            });
            $addTocartBtn.prepend($image);
            var position = $cartIcon.position();
            $image.animate({
                top: position.top
                , left: position.left
            }, 500, "linear", function () {
                $image.remove();
            });
        }
        $('.my-cart-btn').myCart({
            currencySymbol: '$'
            , classCartIcon: 'my-cart-icon'
            , classCartBadge: 'my-cart-badge'
            , classProductQuantity: 'my-product-quantity'
            , classProductRemove: 'my-product-remove'
            , classCheckoutCart: 'my-cart-checkout'
            , affixCartIcon: true
            , showCheckoutModal: true
            , numberOfDecimals: 2
            , afterAddOnCart: function (products, totalPrice, totalQuantity) {
                console.log("afterAddOnCart", products, totalPrice, totalQuantity);
            }
            , clickOnCartIcon: function ($cartIcon, products, totalPrice, totalQuantity) {
                console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
            }
            , checkoutCart: function (products, totalPrice, totalQuantity) {
                var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
                checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
                $.each(products, function () {
                    checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
                });
                alert(checkoutString)
                console.log("checking out", products, totalPrice, totalQuantity);
            }
        , });
    });
    //menu and itemsPage fixed
    var menu = $('.menu');
    var menu_fixed = 'menu_fixed';
    var items = $('.itemsPage');
    var items_fixed = 'items_fixed';
    var header = $('.header').height();
    var items_height = 450;
    var max_height = 3290;
    $(window).scroll(function () {
        if ($(this).scrollTop() > header) {
            menu.addClass(menu_fixed);
            $(".menu_style_ul a").css({
                top: '30px'
            });
            $(".items_block").css({
                marginTop: '120px'
            })
        }
        else {
            menu.removeClass(menu_fixed);
            $(".menu_style_ul a").css({
                top: '65px'
            });
            $(".items_block").css({
                marginTop: '50px'
            })
        }
    });
    //animate menu
    $('.chooseHome').hover(function () {
        $('.home').css({
            height: '70px'
        })
    }, function () {
        $('.home').css({
            height: '10px'
        });
    });
    $('.chooseMen').hover(function () {
        $('.men').css({
            height: '70px'
        })
    }, function () {
        $('.men').css({
            height: '10px'
        })
    });
    $('.chooseWoman').hover(function () {
        $('.woman').css({
            height: '70px'
        })
    }, function () {
        $('.woman').css({
            height: '10px'
        })
    });
    $('.chooseGirl').hover(function () {
        $('.girl').css({
            height: '70px'
        })
    }, function () {
        $('.girl').css({
            height: '10px'
        })
    });
    $('.chooseBoy').hover(function () {
        $('.boy').css({
            height: '70px'
        })
    }, function () {
        $('.boy').css({
            height: '10px'
        })
    });
    $('.choosePlus').hover(function () {
        $('.pSize').css({
            height: '70px'
        })
    }, function () {
        $('.pSize').css({
            height: '10px'
        })
    });
    $('.chooseContacts').hover(function () {
        $('.contacts').css({
            height: '70px'
        })
    }, function () {
        $('.contacts').css({
            height: '10px'
        })
    });
    // рух тексту
    $('.loginClick').click(function () {
        $('.labelLogin').css({
            top: '32px'
            , fontSize: '16px'
        })
    });
    $('.passClick').click(function () {
        $('.labelPass').css({
            top: '85px'
            , fontSize: '16px'
        })
    });
    $('.emailClick').click(function () {
        $('.labelEmail').css({
            top: '32px'
            , fontSize: '16px'
        })
    });
    $('.newLoginClick').click(function () {
        $('.labelNewLogin').css({
            top: '59px'
            , fontSize: '16px'
        })
    });
    $('.newPassClick').click(function () {
        $('.labelNewPass').css({
            top: '110px'
            , fontSize: '16px'
        })
    });
    $('.newEmailClick').click(function () {
        $('.labelNewEmail').css({
            top: '168px'
            , fontSize: '16px'
        })
    });
    $('.myNameClick').click(function () {
        $('.labelMyName').css({
            top: '0px'
            , fontSize: '16px'
        })
    });
    $('.myEmailClick').click(function () {
        $('.labelmyEmail').css({
            top: '0px'
            , fontSize: '16px'
        })
    });
    $('.myMessageClick').click(function () {
        $('.labelMyMessage').css({
            top: '0px'
            , fontSize: '16px'
        })
    });
    //    slider style
    var heightSlider = innerHeight - 155;
    $('.container').css({
        height: heightSlider
    })
    let slide_data = [
        {
            'src': 'img/desktop-imghomeboots.st2.jpg'
            , 'title': 'Woman collection'
  }
        , {
            'src': 'img/2.jpg'
            , 'title': 'autumn style'
  }
        , {
            'src': 'img/3.jpg'
            , 'title': 'Funny kids'
  }
        , {
            'src': 'img/desktop-imgstreemand.st.jpg'
            , 'title': 'Join life'
  },

];
    let slides = []
        , captions = [];
    let autoplay = setInterval(function () {
        nextSlide();
    }, 5000);
    let container = document.getElementById('container');
    let leftSlider = document.getElementById('left-col');
    let down_button = document.getElementById('down_button');
    down_button.addEventListener('click', function (e) {
        e.preventDefault();
        clearInterval(autoplay);
        nextSlide();
        autoplay;
    });
    for (let i = 0; i < slide_data.length; i++) {
        let slide = document.createElement('div')
            , caption = document.createElement('div')
            , slide_title = document.createElement('div');
        slide.classList.add('slide');
        slide.setAttribute('style', 'background:url(' + slide_data[i].src + ')');
        caption.classList.add('caption');
        slide_title.classList.add('caption-heading');
        slide_title.innerHTML = '<h1>' + slide_data[i].title + '</h1>';
        switch (i) {
        case 0:
            slide.classList.add('current');
            caption.classList.add('current-caption');
            break;
        case 1:
            slide.classList.add('next');
            caption.classList.add('next-caption');
            break;
        case slide_data.length - 1:
            slide.classList.add('previous');
            caption.classList.add('previous-caption');
            break;
        default:
            break;
        }
        caption.appendChild(slide_title);
        caption.insertAdjacentHTML('beforeend', '<div class="caption-subhead"><span> </span></div>');
        slides.push(slide);
        captions.push(caption);
        leftSlider.appendChild(slide);
        container.appendChild(caption);
    }

    function nextSlide() {
        slides[0].classList.remove('current');
        slides[0].classList.add('previous', 'change');
        slides[1].classList.remove('next');
        slides[1].classList.add('current');
        slides[2].classList.add('next');
        let last = slides.length - 1;
        slides[last].classList.remove('previous');
        captions[0].classList.remove('current-caption');
        captions[0].classList.add('previous-caption', 'change');
        captions[1].classList.remove('next-caption');
        captions[1].classList.add('current-caption');
        captions[2].classList.add('next-caption');
        let last_caption = captions.length - 1;
        captions[last].classList.remove('previous-caption');
        let placeholder = slides.shift();
        let captions_placeholder = captions.shift();
        slides.push(placeholder);
        captions.push(captions_placeholder);
    }
    let heading = document.querySelector('.caption-heading');

    function whichTransitionEvent() {
        var t, el = document.createElement("fakeelement");
        var transitions = {
            "transition": "transitionend"
            , "OTransition": "oTransitionEnd"
            , "MozTransition": "transitionend"
            , "WebkitTransition": "webkitTransitionEnd"
        }
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }
    var transitionEvent = whichTransitionEvent()
    caption.addEventListener(transitionEvent, customFunction);

    function customFunction(event) {
        caption.removeEventListener(transitionEvent, customFunction);
        console.log('animation ended');
    }
    //    /*filter for men*/
    //    $('#coatsClickM').click(function () {
    //        var l = $('.menPage .all_item').length;
    //        for (var i = 1; i < l; i++) {
    //            $('.men' + i).css({
    //                display: 'none'
    //            });
    //        }
    //        $('.men0').css({
    //            display: 'block'
    //            , top: "70px"
    //            , left: '575px'
    //        });
    //        $('.menPage').css({
    //            height: heightSlider + 'px'
    //        });
    //    });
});