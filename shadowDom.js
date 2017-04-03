/**
 * Created by YSingh on 04/04/17.
 */

//Shadow dom is separate dom tree out of main document tree. it essentially is not part of main dom tree.
//But, when it renders it behaves as if it's part of dom tree.

    //Use case: It created local scope for the element and css of dom tree will not be applied to it.
    //only css present within shadow dom will be applied

//We can use template also with shadow dom

// <template id="tmpl">
//     <style> *{ color: red } </style>
//     <div class="container">Hello World!</div>
// </template>

var host = document.querySelector("container");
var shadowDom = host.createShadowRoot();

var ele = document.createElement("div");
ele.className = "child";
ele.textContent = "Hello World!";

shadowDom.appendChild(ele);

//OR - directly insert template

shadowDom.appendChild(document.querySelector("#tmpl").content());