(function ($) {
    function getContinent(list, name) {
        var idx = list.findIndex ( (cont) => { return cont.name===name });
        $('#img').html('<img class="img-fluid" src="images\\'+list[idx].image + '">'); 
        $('#content').html(list[idx].info);  
        // ToDo: use add/remove class and move specific style details to css.
        $('.sidebar li a').css('color','black');     
        $('.sidebar li a[href="' + window.location.hash + '"]').css('color','red'); 
    }
    var app = $.sammy('#main', function () {
        //this.use('Template');
        var displayContinents = false;

        this.around(function(callback) { // get all the item data and save it off for later use
            var context = this; 

            this.load('data/continents.json')
                .then(function(items) {
                  context.continents = items;
                })
                .then(callback);
        });
        
        this.get('#/', function (context) {   // "home"
            displayContinents = false;
            displayOceans = false;
            this.partial('home.html') ;
        });

        this.get('#/about',function (context) {   // "about"
            displayContinents = false;    
            displayOceans = false;                   
            this.partial('about.html') ;
        });

        this.get('#/continents/:name',function(context) {
            console.log(" continents: "+ this.path + "win=" + window.location.hash);
            var name = this.params.name;
            var context  = this;
            displayOceans = false;            
            if (!displayContinents) {
                displayContinents = true;
                this.partial('continents.html')
                    .then(function() {
                         getContinent(context.continents, name);
                    })
            }
            else
                getContinent(context.continents, name);
        //    var idx = context.continents.findIndex ( (cont) => { return cont.name===name });
        //    console.log(" and idx = " + idx);
        //    context.app.swap('');                 
        //    context.render('../templates/continents.template', { image: context.continents[idx].image, info: context.continents[idx].info })
        //            .appendTo(context.$element());
        //            console.log(' and again display now ='+displayContinents);
        });

      //  this.get('#/oceans/:name',function(context) {
        this.get('#/oceans',function(context) {           
            displayContinents = false;
            console.log("oceans " + this.path);
           this.partial('oceans.html');
        });        
    });

    $(function() {
        app.run('#/');
    });
})(jQuery);
