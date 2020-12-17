window.lazyLoadOptions = {
    elements_selector: "img[data-lazy-src],.rocket-lazyload",
    data_src: "lazy-src",
    data_srcset: "lazy-srcset",
    data_sizes: "lazy-sizes",
    class_loading: "lazyloading",
    class_loaded: "lazyloaded",
    threshold: 300,
    callback_loaded: function(element) {
        if (element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible") {
            if (element.classList.contains("lazyloaded")) {
                if (typeof window.jQuery != "undefined") {
                    if (jQuery.fn.fitVids) {
                        jQuery(element).parent().fitVids();
                    }
                }
            }
        }
    }
};
window.addEventListener('LazyLoad::Initialized', function(e) {
    var lazyLoadInstance = e.detail.instance;

    if (window.MutationObserver) {
        var observer = new MutationObserver(function(mutations) {
            var image_count = 0;
            var iframe_count = 0;
            var rocketlazy_count = 0;

            mutations.forEach(function(mutation) {
                for (i = 0; i < mutation.addedNodes.length; i++) {
                    if (typeof mutation.addedNodes[i].getElementsByTagName !== 'function') {
                        return;
                    }

                    if (typeof mutation.addedNodes[i].getElementsByClassName !== 'function') {
                        return;
                    }

                    images = mutation.addedNodes[i].getElementsByTagName('img');
                    is_image = mutation.addedNodes[i].tagName == "IMG";
                    iframes = mutation.addedNodes[i].getElementsByTagName('iframe');
                    is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
                    rocket_lazy = mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');

                    image_count += images.length;
                    iframe_count += iframes.length;
                    rocketlazy_count += rocket_lazy.length;

                    if (is_image) {
                        image_count += 1;
                    }

                    if (is_iframe) {
                        iframe_count += 1;
                    }
                }
            });

            if (image_count > 0 || iframe_count > 0 || rocketlazy_count > 0) {
                lazyLoadInstance.update();
            }
        });

        var b = document.getElementsByTagName("body")[0];
        var config = {
            childList: true,
            subtree: true
        };

        observer.observe(b, config);
    }
}, false);

function PopupCenter(url, title, w, h) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

jQuery.noConflict();
(function($) {
    $(function() {
        $("#btnCloseChat").mouseover(function() {
            $("#btn-Chat").stop().animate({
                right: "0px"
            });
        }), $("#btn-Chat").mouseleave(function() {
            $("#btn-Chat").stop().animate({
                right: "-199px"
            });
        });
    });
    $('.this_close span').click(function() {
        $(".This_for_mobile").stop().animate({
            bottom: "-100%"
        });
    });
    $('.mob_Head').click(function() {
        $(".This_for_mobile").stop().animate({
            bottom: "0"
        });
    });

    $('.holder-gif > span').click(function() {
        $(".bottom_gif_banner").hide();
    });

})(jQuery);