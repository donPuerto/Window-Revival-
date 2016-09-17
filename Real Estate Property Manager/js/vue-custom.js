/**
 * Created by Don Puerto on 9/17/2016.
 */

var data = {
    bool: true
};
new Vue({
    el: '#videoApp',
    data: data,
    methods: {
        imgOnClick: function () {
            this.bool = false
            setTimeout(function(){
                this.bool = true
                location.reload();
            }, 50000);
        }
    }
})