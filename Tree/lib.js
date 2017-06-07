/**
 * Created by YSingh on 06/06/17.
 */

var lib = (function() {
    function getTreeInstance(options) {
        if(validate(options)) {
            return new treeWidget(options);
        }
    }

    function treeWidget(options) {
        this.config = options ? options : getDefaultConfig();
        this.render();
        this.bindEvents();
    }

    treeWidget.prototype.bindEvents = function() {
        var ele = document.querySelectorAll(this.config.element);
        for(var i = 0; i < ele.length; i++) {
            ele[i].addEventListener('click', function(e){
                var el = e.target;
                if (el && el.tagName == 'LI' && el.classList.value.indexOf('leaf') == -1) {
                    if(el.classList.value.indexOf('expand') != -1) {
                        el.classList.remove("expand");
                        el.classList.add("collapse");
                    }
                    else {
                        el.classList.remove("collapse");
                        el.classList.add("expand");
                    }
                }
                e.stopPropagation();
            }, false)
        }
    }

    treeWidget.prototype.render = function() {
        this.template = "";
        this.generateList(this.config.data, 0);
        var ele = document.querySelectorAll(this.config.element);
        for(var i = 0; i < ele.length; i++) {
            ele[i].innerHTML = this.template;
        }
    }

    treeWidget.prototype.generateList = function(data, level) {
        if(data.length == 0) {
            return;
        }
        this.template += "<ul class='parent" + level + "'>";
        for(var i = 0; i < data.length; i++) {
            if(data[i].children && data[i].children.length > 0) {
                this.template += "<li data-id='" + data[i].id + "' data-type='" + data[i].type + "' class='child" + level + " expand'>" +  data[i].name;
                this.generateList(data[i].children, level + 1);
            }
            else {
                this.template += "<li data-id='" + data[i].id + "' data-type='" + data[i].type + "' class='child" + level + " leaf'>" +  data[i].name;
            }
            this.template += "</li>";
        }
        this.template = this.template + "</ul>";
    }

    function getDefaultConfig() {
        //default config
        return {};
    }

    function validate(options) {
        //validation code
        return true;
    }

    return {
        treeWidget: getTreeInstance
    }

})();

lib.treeWidget({
    element: "#tree",
    data: [
        {
            "id": "1",
            "name": "Folder0",
            "type": "folder",
            "children": [
                {
                    "id": "101",
                    "name": "Folder1",
                    "type": "folder",
                    "children": [
                        {
                            "id": "1001",
                            "name": "Folder2",
                            "type": "folder"
                        },
                        {
                            "id": "1002",
                            "name": "File5.2",
                            "type": "file"
                        }
                    ]
                },
                {
                    "id": "102",
                    "name": "File3.2",
                    "type": "file"
                }
            ]
        },
        {
            "id": "2",
            "name": "Folder1",
            "type": "folder",
            "children": [
                {
                    "id": "110",
                    "name": "Folder2",
                    "type": "folder"
                },
                {
                    "id": "120",
                    "name": "File4.5",
                    "type": "file"
                }
            ]
        }
    ]
});

lib.treeWidget({
    element: "#tree2",
    data: [
        {
            "id": "1",
            "name": "Folder0",
            "type": "folder",
            "children": [
                {
                    "id": "101",
                    "name": "Folder1",
                    "type": "folder",
                    "children": [
                        {
                            "id": "1001",
                            "name": "Folder2",
                            "type": "folder"
                        },
                        {
                            "id": "1002",
                            "name": "File5.2",
                            "type": "file"
                        }
                    ]
                },
                {
                    "id": "102",
                    "name": "File3.2",
                    "type": "file"
                }
            ]
        },
        {
            "id": "2",
            "name": "Folder1",
            "type": "folder",
            "children": [
                {
                    "id": "110",
                    "name": "Folder2",
                    "type": "folder"
                },
                {
                    "id": "120",
                    "name": "File4.5",
                    "type": "file"
                }
            ]
        }
    ]
});



