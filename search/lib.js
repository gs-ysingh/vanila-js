var lib = (function() {

    function filterList(options) {
        this.config = options ? options : this.getDefaultConfig();
        this.render();
        this.bindEvents();
    }

    function getInstanceOfFilterList(options) {
        if(validate(options)) {
            return new filterList(options);
        }

        return false;
    }

    filterList.prototype.render = function() {
        var template = "<input type = 'text' class='searchBox'/>"
        var element = $(this.config.element).parent();
        element.prepend(template);
    }

    filterList.prototype.bindEvents = function() {
        var element = $(this.config.element).parent();
        var config = this.config;
        var self = this;
        element.on( "keyup", '.searchBox', function(evt) {
            if(evt.target.value && evt.target.value.length > config.minChar){
                self.filterData(evt.target.value);
            }
            else {
                $(self.config.element).find("li").each(function(index, node) {
                    $(node).show();
                });
            }
        });
    }

    filterList.prototype.filterData = function(value) {
        $(this.config.element).find("li").each(function(index, node) {
            console.log(node);
            if($(node).text().indexOf(value) == -1) {
                $(node).hide();
            }
            else {
                console.log('show');
                $(node).show();
            }
        });
    }

    filterList.prototype.getDefaultConfig = function() {
    }
    function validate(options) {
        return true;
    }
    return {
        filterList: getInstanceOfFilterList
    }
})();

lib.filterList({
    element: '.list',
    minChar: 1
})

lib.filterList({
    element: '.list2',
    minChar: 1
})