$(document).ready(function(){  });
var snow_intensity = 45; // smaller number = more snowflakes;
        function Snowflake() {
            var snowflake = this;
            snowflake.x = (Math.random() * $(document).width());
            snowflake.size = (Math.random() * 35) + 10;
            snowflake.opacity = Math.random();
            snowflake.body = $("<em class='snowflake'>*</em>");
            snowflake.body.css({ 'font-size': this.size + 'px', 'left': this.x + 'px', opacity: this.opacity });
            snowflake.fall = function () {
                var that = this;
                var $snowflake = this.body;
                var swing_direction = 1;
                var swing_wave = Math.random() * 100;
                var interval = setInterval(function () {
                    $snowflake.css({ left: that.x + (swing_direction * swing_wave) });
                    swing_direction = - swing_direction;
                }, 1000);
                var speed = (Math.random() * 3000) + 3000;
                $snowflake.animate({ top: '100vh' }, speed, function () {
                    clearInterval(interval);
                    $snowflake.remove();
                });
            }
            $('body').append(snowflake.body);
            snowflake.fall();
        }

        var snow = window.setInterval(function () {
            new Snowflake();
        }, snow_intensity);

        document.onkeypress = function () {
            window.clearInterval(snow);
        };