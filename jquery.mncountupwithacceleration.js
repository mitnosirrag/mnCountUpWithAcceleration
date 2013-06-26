/*
* Author: Tim Garrison
* URI: http://mitnosirrag.tumblr.com
* GitHub: https://github.com/mitnosirrag
* License: Apache 2.0 <http://www.apache.org/licenses/LICENSE-2.0>
*
* jQuery extension to count up with acceleration, so it will count to large
* numbers quickly, but will throttle back as it gets toward the final number
*/
$.fn.extend({
    mnCountUpWithAcceleration: function(end,options) {
        var t = $(this);
        var speed = 1, i = 0, to, a = 6;
        var start = t.text();
        if ( !end ) 
            end = $(this).text();
        end = String(end);
        start = parseInt(start.replace(/,/g, ""));
        end = parseInt(end.replace(/,/g, ""));
        var dir = 'up';
        if ( start >= end ) {
            dir = 'down';
        }
        var defaults = {
            append: '',
            highlightOnComplete: true
        }
        var opts = $.extend(defaults, options);
        i = parseInt(start);
        /*  
        * Thanks to Stackoverflow user: mikez302
        * http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        * License: http://creativecommons.org/licenses/by-sa/3.0/                           
        */ 
        $.numberWithCommas = function(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }
        function cuwaTest() {
            if ( 0 == Math.abs(end - i) ) {
                clearTimeout(to);
                t.text($.numberWithCommas(end) + opts.append);
                if ( opts.highlightOnComplete ) {
                    t.parent().effect('highlight',{color:'#efb669'},1000);
                }
            } else {
                cuwaCount();
            }
        }
        function cuwaCount() {
            t.text($.numberWithCommas(i));
            var diff = Math.abs(end - i);
            if ( 5 >= diff ) {
                a = 1;
                speed = 100;
            } else if ( 10 >= diff ) {
                a = 1;
                speed = 20;
            }
            if ( 'down' == dir ) {
                i-=a;
            } else {
                i+=a;
            }
            to = setTimeout(cuwaTest,speed);
        }
        return this.each(function() {
            cuwaTest();
        });
    }
});
