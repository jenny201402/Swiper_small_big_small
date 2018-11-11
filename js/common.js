var $$={

    lunbo : function(data){
        var ul = $('ul');
        var liFirst = ul.find('li:first');
        ul.animate({top:'-50px'}).animate({"top":0},0,function(){
            var clone = liFirst.clone();
            ul.append(clone);
            liFirst.remove();
            console.log(123)
        });
    },

    setTime : function(){
        var data = {};
        data.tag = 'ul';
        data.property = '-50px';
        setInterval(this.lunbo(data), 1000);
    },

    test:function () {
        console.log("test");
    }

}