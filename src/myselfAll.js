

/**
 * 建立节点树结构
 * todo:已经可以执行，进一步理解
 */


(function (global, factory) {
    global['TreeList'] = factory({}); // <script>
}(this, function (exports) {
    //var Tree = function(root){
    exports = function(root){
        'use strict';
        var me = this;
        me.element = null;
        me.selected = null;

        (function init(){
            add_css('\
            .clear:after{ content: ".";clear: both;display: block;height: 0;visibility: hidden;font-size: 0;line-height: 0; }\
            .tl-ui-scroll{overflow-y:overlay;} .tl-ui-scroll::-webkit-scrollbar {height:8px;overflow:visible;width:8px;background-color:transparent} .tl-ui-scroll::-webkit-scrollbar-thumb {border-radius:8px;background-color:rgba(0,0,0,0.2);}\
            @-moz-document url-prefix() { .tl-ui-scroll{overflow-y:scroll} }\
            \
            /* tree css */\
            .tl-ui-tree {display:block; overflow: auto; position: relative;}\
            .tl-ui-tree:focus{ outline: 0px !important; }\
            .tl-ui-tree .nd{ -moz-user-select:none; -webkit-user-select:none; cursor: default; color: #339; font-size: 12px; overflow: hidden; font-family: Consolas, Lucida Console, monospace; line-height: 16px; padding: 1px 0px 0px 16px}\
            \
            .tl-ui-tree .nd b{ font-weight:100; display: block}\
            .tl-ui-tree .nd .c1{ color:#969 }\
            .tl-ui-tree .nd b:hover:before{ content:" "; pointer-events: none; position:absolute; left:2px; right:2px; height: 16px; background-color:rgba(128,192,255,0.12); border-radius: 4px;}\
            \
            .tl-ui-tree .nd[selected="true"] > b:before{ content:" "; pointer-events: none; position:absolute; left:0px; right:0px; height: 16px; z-index:-1; background-color:rgba(51,128,224,0.8); border-radius: 0px; }\
            .tl-ui-tree .nd[selected="true"] > b{ color:#fff }\
            .tl-ui-tree .nd[selected="true"] > b > *{ color:#fff }\
            \
            .tl-ui-tree:hover .nd[selected="true"] > b:before{ background-color:rgba(51,128,224,.9); }\
            \
            .tl-ui-tree .nd:last-child {}\
            \
            .tl-ui-tree .c{padding-left:6px !@important}\
            .tl-ui-tree .c > .nd{display:none}\
            .tl-ui-tree .c:before,\
            .tl-ui-tree .e:before{ content:" "; pointer-events:none; display:inline-block; position:relative; left:-4px; top:4px; width:0px; height:0px; border-color:transparent; border-style: solid;float:left}\
            \
            .tl-ui-tree .c:before{ border-width: 4px 0 4px 8px;border-left-color: rgba(51,51,51,.5); }\
            .tl-ui-tree .e:before{ border-width: 8px 4px 0px 4px;border-top-color: rgba(51,51,51,.5); }\
            .tl-ui-tree .c[selected="true"]:before { border-left-color: #fff; }\
            .tl-ui-tree .e[selected="true"]:before { border-top-color: #fff; }\
                ');

            var el = document.createElement('DIV');
            el.className = 'tl-ui-tree';
            el.id = parseInt((new Date).getTime());
            el.setAttribute('tabindex',1);
            (root || document.body).appendChild(el);
            me.element = el;

            el.addEventListener('mouseover', function(e){
                var nd_dom = e.target;
                (nd_dom.tagName == 'EM') && (nd_dom = nd_dom.parentNode.parentNode);
                (nd_dom.tagName == 'SPAN' || nd_dom.tagName == 'B' || nd_dom.tagName == 'I') && (nd_dom = nd_dom.parentNode); // get node dom, <div><b>name ...

                me.on_hover && me.on_hover(nd_dom);
            });

            el.addEventListener('mouseout', function(e){
                e.stopPropagation();
                e.preventDefault();

                me.on_out && me.on_out();
            });

            el.addEventListener('mousedown', function(e){
                e.stopPropagation();
                e.preventDefault();
                var nd_dom = e.target;

                (nd_dom.tagName == 'EM') && (nd_dom = nd_dom.parentNode.parentNode);
                (nd_dom.tagName == 'SPAN' || nd_dom.tagName == 'B' || nd_dom.tagName == 'I') && (nd_dom = nd_dom.parentNode); // get node dom, <div><b>name ...
                select_item(nd_dom);
                el.focus();
                //console.log(nd_dom, nd_dom.__nodes);
            });

            function find_parent_sibling(nd){
                var f = function(_n){
                    var n = _n.nextSibling;
                    //if (!n) return;
                    if (_n.className.indexOf('e') >-1){// && me.selected.__data && me.selected.__data.nodes && me.selected.__data.nodes.length){
                        n = _n.getElementsByClassName('nd')[0];
                    }
                    return n;
                };
                return f(nd);
            }

            el.addEventListener('keydown', function(e){
                if (!me.selected) return;
                if (e.keyCode == 38){ // up
                    var n = me.selected.previousSibling;
                    // 处理某个元素移动向上一个已经展开的情况
                    if (!n || n.tagName == 'B'){
                        n = me.selected.parentNode;
                        if (n.id == me.element.id) return;
                    }
                    // 处理某个子元素移动向上一个已经展开的元素的情况
                    else if (n.className.indexOf('e') >-1){ // has class e
                        var i = 0, tmp_n = n, nd_arr, nd_len;
                        while (i < 1000){ // max 1000 times
                            nd_arr = tmp_n.getElementsByClassName('nd');
                            nd_len = nd_arr.length;
                            tmp_n = nd_arr[nd_len-1]; // last child
                            if (tmp_n.className.indexOf('e') >-1){ /*continue*/ }else{ n = tmp_n; break; }
                            i++;
                        }
                    }
                    if (!n) return;
                    select(n);
                }else if(e.keyCode == 40){ // down
                    var n = me.selected.nextSibling;
                    // 处理某个元素移动向下一个已经展开的情况
                    if (me.selected.className.indexOf('e') >-1){ // has class e
                        n = me.selected.getElementsByClassName('nd')[0];
                    }
                    // 处理已经展开的某个子元素移动向下一个元素的情况
                    else if (!n){
                        var i = 0, tmp_n = me.selected;
                        while (i < 1000){ // max 1000 times
                            tmp_n = tmp_n.parentNode;
                            if (tmp_n.id == me.element.id) return; // is root
                            if (tmp_n.nextSibling){ n = tmp_n.nextSibling; break; }
                            i++;
                        }
                    }
                    if (!n) return;
                    select(n);
                }else if(e.keyCode == 39){
                    toggle(me.selected);
                }
            });

        })();

        function add_css(v){
            var d = document, b = d.createElement("style"), s = d.styleSheets;
            for (var i in s) { if (s[i].textContent == v) return; }
            b.appendChild(d.createTextNode(v)), d.head.appendChild(b);
        }

        function toggle(nd_dom){
            var callback = function(){
                if (nd_dom.__is_not_inited && nd_dom.__data && nd_dom.__data.nodes){
                    insert(nd_dom.__data.nodes, nd_dom);
                    nd_dom.__is_not_inited = false;
                }
                if(nd_dom.className == 'nd e'){
                    nd_dom.className = 'nd c'
                }else if(nd_dom.className == 'nd c'){
                    nd_dom.className = 'nd e';
                }
                me.on_after_toggle && me.on_after_toggle(nd_dom);
            };
            // toggle
            me.on_before_toggle ? me.on_before_toggle(nd_dom, callback) : callback();
        }

        function select(nd_dom){
            // select a node
            me.selected && me.selected.removeAttribute && me.selected.removeAttribute('selected');
            nd_dom.setAttribute('selected', true);
            me.selected = nd_dom;
            me.on_select && me.on_select(nd_dom);
        }

        function select_item(nd_dom){
            select(nd_dom);
            toggle(nd_dom);
        }
        me.select_item = select_item;

        function explore(path){
            path = path || [];
            var nd, nd_dom;

            var callback = function(){
                if (nd_dom.__is_not_inited && nd_dom.__data && nd_dom.__data.nodes){
                    insert(nd_dom.__data.nodes, nd_dom);
                    nd_dom.__is_not_inited = false;
                }
                if(nd_dom.className == 'nd c'){
                    nd_dom.className = 'nd e'
                }
                find_by_path_and_expand_node();
                me.on_after_toggle && me.on_after_toggle(nd_dom);
            };

            function find_by_path_and_expand_node(){
                if (path.length <=0){
                    return;
                }
                nd = path.shift();
                nd_dom = document.getElementById(nd.id);

                me.on_before_toggle ? me.on_before_toggle(nd_dom, callback) : callback();
            }
            find_by_path_and_expand_node();
            select(nd_dom); // select a nd_dom
            me.element.parentNode.scrollTop = nd_dom.offsetTop; // scroll to selection

        };
        me.explore = explore;

        function remove(d, parent){
            var nd, nd_dom;
            if (typeof parent == 'number' || typeof parent == 'string'){
                parent = document.getElementById(parent);
            }
            if (parent == null) return;
            nd = d || {};
            nd_dom = document.getElementById(nd.id);
            nd_dom && parent.removeChild(nd_dom);
            me.on_remove && me.on_remove(nd, parent);
        }
        me.remove = remove;

        function insert(d, parent){
            var nd, nd_dom;
            if (typeof parent == 'number' || typeof parent == 'string'){
                parent = document.getElementById(parent);
            }
            if (parent == null) return;

            function ir(){
                nd_dom = document.createElement('DIV');
                nd_dom.id = nd.id || null;
                nd_dom.className = 'nd';
                nd_dom.setAttribute('name', nd.text);
                nd_dom.innerHTML = '<b>'+ ((nd.name != undefined)?('<em class="c1">'+nd.name+'</em>:'):'') + nd.text || '..' + '</b>';
                // set the source data
                nd && (typeof nd == 'object') && (nd_dom.__data = nd);
                if (nd && nd.nodes && nd.nodes.length){
                    //nd_dom.__nodes = nd.nodes;
                    nd_dom.className += ' c'; // collapsed, expanded
                    nd_dom.__is_not_inited = true;
                }
                parent.appendChild(nd_dom);
            }
            if (d.constructor.name == 'Array'){
                for (var i=0,j=d.length;i<j;i++)
                    nd = d[i], ir();
            }else{
                nd = d, ir();
            }
            me.on_insert && me.on_insert(d, parent);
        }
        me.insert = insert;

        function clear_children(el){
            el = el || me.element;
            el.innerHTML = String(el.innerHTML).match(/<b>.*?<\/b>/)[0];  // reserve title and clean nodes
            //el.innerHTML = String(el.innerHTML).match(/<b>\S+<\/b>/)[0];  // reserve title and clean nodes
        }
        me.clear_children = clear_children;

        function clear(el){
            el = el || me.element;
            el.innerHTML = '';  // clear
            me.selected = null;
        }
        me.clear = clear;

        function update(d, el){
            el = el || me.element;
            el.innerHTML = '';  // clear
            me.selected = null;
            insert(d, el);
        }
        me.update = update;

        return me;
    };

    return exports;
}));

(function (global, factory) {
    global['ScaleProfiles'] = factory({}); // <script>Z
}(this, function (exports) {
    exports = function(root) {
        /*t.apply(this, arguments), */
        this.element = document.createElement('DIV');
        this.element.className = 'tl-ui-scaleprofiles';
        this.element.style.position = 'relative';
        var SPEED_CONFIG = [
            0, .05, .1, .25, .5, .75,
            1,
            1.5, 2, 3, 4, 8, 16, 32
        ];

        add_css('\
            .tl-ui-scaleprofiles input[type="range"]{\
              -webkit-appearance:none;\
              height:28px;\
              background: linear-gradient(to right, #eee 0%, #eee 100%);\
              background-size:100% 4px;\
              background-position:center;\
              background-repeat:no-repeat;\
              overflow:hidden;\
              padding-right:1px;padding-left:.5px;\
              margin:0px;\
            }\
            .tl-ui-scaleprofiles input[type="range"]::-webkit-slider-thumb{\
              -webkit-appearance:none;\
              width:20px;\
              height:20px;\
              border-radius: 100%;\
              background:#fff;\
              position:relative;\
              z-index:3;\
              box-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 1px 3px 5px rgba(0, 0, 0, 0.25);\
              cursor: pointer;\
            }\
            .tl-ui-scaleprofiles input[type="range"]::-webkit-slider-thumb:after{\
              content:" ";\
              width:2000px;\
              height:4px;\
              position:absolute;\
              z-index:1;\
              right:20px;\
              top:8px;\
              background: rgba(51,128,224,0.8);\
              /*background: #ff5b32;\
              background: linear-gradient(to right, #f088fc 1%, #AC6CFF 70%);*/\
            }\
        ');

        function add_css(v){
            var d = document, b = d.createElement("style"), s = d.styleSheets;
            for (var i in s) { if (s[i].textContent == v) return; }
            b.appendChild(d.createTextNode(v)), d.head.appendChild(b);
        }


        var me = this;
        this.element.innerHTML = '\
            <fieldset style="border:1px solid #ccc;margin:10px;border-radius:4px;text-align:center;font:normal 14px arial;">\
                <legend>' +(typeof I18n && I18n('Set speed:'))+ ' <b>1x</b></legend>\
                <input type="range" class="speed-range" name="set-speed" min="0" max="' +(SPEED_CONFIG.length-1)+ '" style="width:80%;outline:none;" value="6" />\
            </fieldset>';
        this.element.style.color = '#333';

        this.element.addEventListener('mousemove', function(e){
            var nd_dom = e.target;
            if (nd_dom.type == 'range' && nd_dom.name == 'set-speed'){
                nd_dom.parentNode.children[0].children[0].innerHTML = SPEED_CONFIG[nd_dom.value]+ 'x';
            }
        });
        this.element.addEventListener('change', function(e){
            var nd_dom = e.target;
            e.stopPropagation();
            e.preventDefault();

            if (nd_dom.type == 'range' && nd_dom.name == 'set-speed'){
                nd_dom.parentNode.children[0].children[0].innerHTML = SPEED_CONFIG[nd_dom.value]+ 'x';
                me.on_change && me.on_change('speed', SPEED_CONFIG[nd_dom.value]);
            }
        });

        root.appendChild(this.element);
    }

    // exports.prototype.on_change = function(t){

    // };

    return exports;
}));

/**
 * 属性表
 * todo:已经可以执行，进一步理解
 */


(function (global, factory) {
    global['AttrTable'] = factory({}); // <script>
}(this, function (exports) {
    //var AttrTable = function(root){
    exports = function(root){
        'use strict';
        var me = this;
        me.element = null;

        (function init(){
            add_css('\
            .clear:after{ content: ".";clear: both;display: block;height: 0;visibility: hidden;font-size: 0;line-height: 0; }\
            .tl-ui-scroll{overflow-y:overlay;} .tl-ui-scroll::-webkit-scrollbar {height:8px;overflow:visible;width:8px;background-color:transparent} .tl-ui-scroll::-webkit-scrollbar-thumb {border-radius:8px;background-color:rgba(0,0,0,0.2);}\
            @-moz-document url-prefix() { .tl-ui-scroll{overflow-y:scroll} }\
            \
            /* attribute table css */\
            .tl-ui-attr {display:block; position: relative;}\
            .tl-ui-attr:focus{ outline: 0px !important; }\
            .tl-ui-attr-i {border-bottom:1px solid gainsboro}\
            .tl-ui-attr label {text-indent:10px; display: inline-block; width: 40%; color:#666; font: 100 12px Consolas, Lucida Console, monospace; vertical-align:middle; pointer-events:none;}\
            .tl-ui-attr input, .tl-ui-attr textarea{ vertical-align:middle; display: inline-block; font:100 12px Consolas, Lucida Console, monospace; padding:0; margin:0px 0px}\
            .tl-ui-attr-i[readonly="true"], .tl-ui-attr [readonly="true"]{ opacity:.5 }\
            \
            .tl-ui-attr input[type="text"], .tl-ui-attr input[type="number"], .tl-ui-attr input[type="image"],\
            .tl-ui-attr textarea{ line-height:20px; width:59%; border:none; }\
            \
            .tl-ui-attr input[type="number"]{ color:rgb(28, 0, 207); }\
            .tl-ui-attr input[type="text"],.tl-ui-attr textarea{ color:rgb(196, 26, 22); }\
            .tl-ui-attr input[type="image"]{ border:none; height:40px; width:40px; }\
            .tl-ui-attr a.image{ border:none; display: inline-block; background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC); }\
            \
            .tl-ui-attr input[type="checkbox"]{ height:14px; width:14px; margin:2px 0;}\
            /*.tl-ui-attr input[type="checkbox"]{ border-radius:20px; background:gainsboro; width:48px; height:20px; -webkit-appearance:none; vertical-align: middle; transition: all .4s ease; }\
            .tl-ui-attr input[type="checkbox"]:checked{ background: limegreen; }\
            .tl-ui-attr input[type="checkbox"]:before{ border-radius:20px; transition: all .2s ease;content: " "; position: relative; display: block; background: white; width: 16px; height: 16px; top:2px; left:30px; z-index:1; }\
            .tl-ui-attr input[type="checkbox"]:checked:before{top:2px;left:2px;}*/\
            \
            .tl-ui-attr input[type="color"]{ border:none; background:transparent; margin:0px; width:48px;height:20px; }\
                ');

            var el = document.createElement('DIV');
            el.className = 'tl-ui-attr';
            el.id = parseInt((new Date).getTime());
            el.setAttribute('tabindex',2);
            (root || document.body).appendChild(el);
            me.element = el;

            el.addEventListener('click', function(e){
                var nd_dom = e.target;
                //e.stopPropagation();
                //e.preventDefault();

                if (nd_dom.getAttribute('readonly')) return;
                if (nd_dom.type == 'image') return;

                if (navigator.userAgent.match('Chrome')){
                    if (nd_dom.tagName == 'INPUT' && nd_dom.type == 'number'){
                        me.element.parentNode.style.overflowY = 'hidden';
                    }else{
                        me.element.parentNode.style.overflowY = 'overlay';
                    }
                }
            });

            el.addEventListener('mousewheel', function(e){
                var nd_dom = e.target;

                if (nd_dom.getAttribute('readonly')) return;

                //if (nd_dom.tagName == 'INPUT' || nd_dom.tagName == 'TEXTAREA'){
                if (nd_dom.tagName == 'INPUT' && nd_dom.type == 'number'){
                    on_change(nd_dom, nd_dom.attr, get_value(nd_dom));
                }
            });

            el.addEventListener('change', function(e){
                var nd_dom = e.target;
                e.stopPropagation();
                e.preventDefault();

                if (nd_dom.getAttribute('readonly')) return;
                if (nd_dom.type == 'image') return;

                if (nd_dom.tagName == 'INPUT' || nd_dom.tagName == 'TEXTAREA'){
                    on_change(nd_dom, nd_dom.attr, get_value(nd_dom));
                }
            });

            el.addEventListener('keydown', function(e){ me.disable_change = false });
            el.addEventListener('mousedown', function(e){ me.disable_change = false });

            el.addEventListener('keyup', function(e){
                var nd_dom = e.target;
                e.stopPropagation();
                e.preventDefault();

                if (nd_dom.getAttribute('readonly')) return;
                if (nd_dom.type == 'image') return;

                if (nd_dom.tagName == 'INPUT' || nd_dom.tagName == 'TEXTAREA'){
                    on_change(nd_dom, nd_dom.attr, get_value(nd_dom));
                }
            });

        })();

        function add_css(v){
            var d = document, b = d.createElement("style"), s = d.styleSheets;
            for (var i in s) { if (s[i].textContent == v) return; }
            b.appendChild(d.createTextNode(v)), d.head.appendChild(b);
        }

        function on_change(nd_dom,attr,value){
            if (me.disable_change) return;
            me.on_change && me.on_change(nd_dom,attr,value);
        }

        function rgb2hex(red, green, blue){
            //var decColor = red + 256 * green + 65536 * blue;
            //return '#' + decColor.toString(16);
            return '#' + ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1);
        }
        function hex2rgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }

        function get_value(nd_dom){
            if (nd_dom.type == 'number'){
                return Number(nd_dom.value);
            }else if(nd_dom.type == 'color'){
                var color = hex2rgb(nd_dom.value);
                nd_dom.title = ['R:'+color.r,'G:'+color.g,'B:'+color.b].join();
                return color;
            }else if(nd_dom.type == 'checkbox'){
                return Boolean(nd_dom.checked);
            }
            return nd_dom.value;
        }

        function create_item(attr, data){
            var el = document.createElement('DIV');
            el.className = 'tl-ui-attr-i';
            el.innerHTML = '<label>' +attr+ ':</label>';
            el.title = data.desc||attr;

            var o = document.createElement('input');
            data = data || {};
            var value = data.value;
            if (data.type == 'color'){
                o.type = 'color';
                value = value || {};
                if (typeof value == 'object'){  // convert to hex color, et. #336699
                    var r = value.r, g = value.g, b = value.b;
                    value = rgb2hex(r,g,b);
                    o.title = ['R:'+r,'G:'+g,'B:'+b].join();
                }
            }else if (data.type == 'image'){
                o.type = 'image';
                o.title = value;
                o.setAttribute('attr', attr);

                var img = new Image(), max_h = 100, max_w = 100,
                    _o = o, a = document.createElement('A');
                img.onload = function(){
                    var scale = 1;
                    if (img.width > img.height){
                        scale = max_w / img.width;
                        img.width = max_w;
                        img.height = img.height * scale;
                    }else{
                        scale = max_h / img.height;
                        img.width = img.width * scale;
                        img.height = max_h;
                    }
                    _o.style.width = img.width + 'px', _o.style.height = img.height + 'px';
                    img.onload = null, img = null;
                };

                if (value != undefined){
                    o.src = value;
                    o.setAttribute('value', value);

                    img.src = value;
                    a.href = value;
                    a.target = '_blank';
                }else{
                    navigator.userAgent.match('Firefox') && o.setAttribute('value', '');
                    o.style.cursor = 'default';

                    a.href = 'javascript:void(0)';
                    a.style.cursor = 'default';
                }

                a.className = 'image', a.appendChild(_o);
                o = a; // reset o
            }else if (data.type == 'boolean'){
                o.type = 'checkbox';
                o.checked = value;
            }else if (data.type == 'number'){
                o.type = 'number';
                o.step = 'any';
            }else if ({'string':1,'text':1,'title':1}[attr]){
                o = document.createElement('textarea');
                o.attr = attr;
                o.setAttribute('attr', attr);
                o.innerHTML = value;
            }else{ // string
                o.type = 'text';
            }

            if (navigator.userAgent.match('Chrome')){
                o.onblur = function(){ me.element.parentNode.style.overflowY = 'overlay' };
            }
            o.attr = attr;
            o.setAttribute('attr',attr);
            o.value = value;
            if (data.readonly) el.setAttribute('readonly',true), o.setAttribute('readonly',true), o.setAttribute('disabled',true);

            el.appendChild(o);
            me.element.appendChild(el);
        }

        function clear(el){
            el = el || me.element;
            el.innerHTML = '';  // clear
        }
        me.clear = clear;

        function update(d){
            // Object.prototype.toString.call([]) == "[object Array]"
            me.disable_change = true; // avoid the on_change event was triggered when reset element
            me.element.innerHTML = '';
            for (var attr in d){
                create_item(attr, d[attr]);
            }
            me.disable_change = false;
        }
        me.update = update;
    };

    return exports;
}));

(function (global, factory) {
    global['ChartFPS'] = factory({}); // <script>
}(this, function (exports) {
    exports = function(w, h, root) {
        /*t.apply(this, arguments), */
        this.element = document.createElement('DIV');
        this.element.className = 'tl-ui-chartfps';
        this.element.style.color = '#333';
        this.element.style.position = 'relative';
        this.fps_txt = document.createElement('DIV');
        this.fps_txt.style.position = 'absolute', this.fps_txt.style.zIndex = 9, this.fps_txt.style.font = 'normal 18px arial';
        this.cvs = document.createElement('CANVAS');
        this.cvs.width = (this.element.clientWidth || 1000), this.cvs.height = (this.element.clientHeight || 100),
            this.cvs.style.width = "100%", this.cvs.style.height = this.cvs.height + 'px',
            this.MAX_FPS = 80, this.MAX_LINES = Math.round(this.cvs.width/10), this._fps_data = [], this._fps = 0;

        this.ctx = /*document.getElementById("fpsChart")*/ this.cvs.getContext("2d");
        this.ctx.webkitImageSmoothingEnabled = false; this.ctx.mozImageSmoothingEnabled = false;
        this.fps && this.fps(0);

        root = root || document.body;
        this.element.appendChild(this.fps_txt);
        this.element.appendChild(this.cvs);
        root.appendChild(this.element);
    }

    exports.prototype.fps = function(t){
        if (t == undefined){
            return this._fps
        }else{
            this._fps = t, this._fps_data.push(t), this._fps_data.length > this.MAX_LINES && this._fps_data.shift(), this.draw_cc(), this.on_fps && this.on_fps()
        }
    };

    exports.prototype.draw_cc = function() {
        var t = this._fps_data.length, c = this.ctx, w = c.canvas.width, h = c.canvas.height, i = Math.round(w / this.MAX_LINES), o = Math.min.apply(Math, this._fps_data);
        o = Math.min(o, 20), c.clearRect(0, 0, w, h);
        c.shadowOffsetX = c.shadowOffsetY = c.shadowBlur = 0;
        for (var r = 0; r < t; r++) {
            var s = this._fps_data[r],
                percent = Math.min(s / this.MAX_FPS , this.MAX_FPS), // MAX fps = 80
                red = Math.round((1 - percent)*200),
                green = Math.round(percent*255);

            c.fillStyle = "rgba(" +[red,Math.round(green*.6),green,.8].join()+ ")", c.fillRect(r * i, Math.round((1 - percent)*h), i /*- 1*/, Math.round(percent * h));
        }
        for (var r = 1; r <= 4; r++) {
            c.fillStyle = "rgba(0,0,0,.2)", c.fillRect(0, Math.round((r/4)*h)-1, w, 1);
        }

        this.fps_txt.innerHTML = 'FPS:' + this._fps;
        /*
        c.shadowColor = "#fff";
        c.shadowOffsetX = c.shadowOffsetY = c.shadowBlur = 1;
        c.font = "bold 12px arial";
        c.fillStyle = "#000";
        c.fillText(this._fps,10,10);*/
    };

    return exports;
}));

/**
 * 国际化文件map
 * todo:已优化
 */

(function (global, factory) {
    global['I18n'] = factory({}); // <script>
}(this, function (exports) {
    res = {}
    var lang = 'zh-cn';
    res['zh-cn'] = {
        'Dock to left/top/right/bottom': '把窗口停靠到 左/上/右/下',
        'Dock': '停靠',
        'Elements': '场景元素',
        'Profiles': '性能调试',
        'Inspect Element': '检察元素',
        'Refresh': '刷新列表',
        'Set speed:': '设置APP速度：',

        '_': '_' // rear
    };

    exports = function(t){
        if (!res[lang]) return String(t);
        return String(res[lang][t] || t);
    };

    exports.lang = lang;

    return exports;
}));

// inject
/*
(function(){
    var tmpl = '\
        <div></div><div></div>\
    ';

    var el = document.createElement('div');
    el.innerHTML = tmpl;
    el.className == 'clear';
    document.body.appendChild(el);
    window.part_tool = el.children[0];
    window.part_game = el.children[1];

    setTimeout(function(){

    window.part_game.appendChild(cc.container);
    cc.view._frame = window.part_game;
    //cc.view._frame = window.part_game;//cc.container.parentNode;
    cc.view._resizeEvent();
    },500);
})();
*/
(function(I18n){
    I18n = I18n || function(t){ return String(t) };

    var tmpl = '\
            <style>\
                .tl-ui-tabs{ background-color:#ddd; height:30px; overflow:hidden }\
                .tl-ui-tabs .iconfont{ font-size:16px }\
                .tl-ui-tabs a{ font:normal 14px "Helvetica Neue", Helvetica, Arial, sans-serif; color:#666; text-decoration:none; }\
                .tl-ui-tabs > a{ line-height:30px; height:30px; padding:0px 10px; text-decoration:none; display:block; float:left }\
                .tl-ui-tabs > a.sel{ background-color:#fff; color:#333; font-weight:bold; box-shadow:0px 0px 6px rgba(0,0,0,.5) }\
                .tl-ui-tabs > a:hover{ color:#000; }\
                .tl-ui-tools { font:normal 14px "Helvetica Neue", Helvetica, Arial, sans-serif; line-height:26px; border-bottom:1px solid #eee; }\
                .tl-ui-tools > a{ color:#999; padding:0 8px; text-decoration:none; display:inline-block}\
                .tl-ui-tools > a:hover{ color:#666 }\
                .tl-ui-tools > a[name="btn-insp"]:focus{ background-color: rgba(51,128,224,.6); color:#fff; box-shadow:inset 0px 0px 0px 4px #fff; }\
                .clear:after{ content: ".";clear: both;display: block;height: 0;visibility: hidden;font-size: 0;line-height: 0; }\
                .jiathis_style .jiadiv_01 .link_01:first-child{ display:none !important }\
                .a2a_menu {font-size:13px !important; border-radius: 0px !important; }\
                .a2a_menu a {font-size:13px !important; border-radius: 0px !important; }\
                a.a2a_i, i.a2a_i{ line-height:20px !important; font-size:13px !important; padding: 2px 6px !important; }\
                a.a2a_i .a2a_svg, a.a2a_more .a2a_svg {background-size: 100% !important;height: 20px !important;line-height: 20px !important;width: 20px !important; }\
                @font-face {\
                  font-family: "uxiconfont";\
                  src: url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.eot");\
                  src: url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */\
                   url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.woff") format("woff"), /* chrome、firefox */\
                   url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/\
                   url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.svg#svgFontName") format("svg");/* IE9*/\
                  /* iOS 4.1- */\
                }\
                .iconfont {font-family: "uxiconfont" !important;font-style: normal; font-weight:normal; -webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}\
            </style>\
            <div class="tl-ui-tabs clear">\
                <a name="tab-dock" title="'+I18n('Dock to left/top/right/bottom')+'" style="float:right" href="javascript:void(0)"><em class="iconfont">Ġ</em> '+I18n('Dock')+'</a>\
                <a name="tab-elements" href="javascript:void(0)" class="sel">'+I18n('Elements')+'</a>\
                <a name="tab-profiles" href="javascript:void(0)">'+I18n('Profiles')+'</a>\
                '
        +
        '</div>\
        <div class="clear" style="position:relative;height:200px;right:0px;left:0px;z-index:9999;background-color:#fff">\
            <div id="container-elements" style="height:100%;">\
                <div class="tl-ui-tools">\
                    <a href="javascript:void(0)" name="btn-insp"><em class="iconfont">Ċ</em> '+I18n('Inspect Element')+'</a>\
                        <a href="javascript:void(0)" name="btn-refresh"><em class="iconfont">ş</em> '+I18n('Refresh')+'</a>\
                    </div>\
                    <div id="left" class="tl-ui-scroll" style="width:60%;height:100%;float:left;">\
                    </div>\
                    <div id="right" class="tl-ui-scroll" style="width:40%;height:100%;float:left;box-shadow:inset 1px 0px 0px silver;">\
                    </div>\
                </div>\
                <div id="container-profiles" class="tl-ui-scroll" style="display:none;height:100%;"></div>\
            </div>\
    ';

    var el = document.createElement('div');
    el.style.backgroundColor = '#fff';
    el.style.zIndex = 9999;
    el.style.boxShadow = '0px 0px 0px 1px #ccc';
    el.style.overflow = 'hidden';
    el.innerHTML = tmpl;
    document.body.appendChild(el);
    document.body.style.overflow = 'auto';
    window.scrollTo(0,document.body.clientHeight);

    var left = document.getElementById('left'),
        right = document.getElementById('right'),
        container_elements = document.getElementById('container-elements'),
        container_profiles = document.getElementById('container-profiles'),
        tabs = el.children[1],
        containers = el.children[2],
        btn_elem = document.getElementById('btn_elem'),
        btn_dock = tabs.children[0];

    el.addEventListener('click', function(e){
        //e.stopPropagation();
        //e.preventDefault();
        var d = e.target,
            n = d.name;

        function clear_tabs(){
            for (var i=0, j=tabs.children.length; i<j; i++){
                if (tabs.children[i].tagName == 'A')
                    tabs.children[i].className = '';
            }
            for (var i=0, j=containers.children.length; i<j; i++){
                containers.children[i].style.display = 'none';
            }
        }

        if (n == 'tab-elements'){
            clear_tabs();
            d.className = 'sel';
            container_elements.style.display = 'block';

        }else if(n == 'tab-profiles'){
            clear_tabs();
            d.className = 'sel';
            container_profiles.style.display = 'block';

        }else if(n == 'btn-refresh'){
            try{ window._cocos_devtools.ie.on_update(null, window._cocos_devtools.ie.get_node_children()) }catch(e){ }
        }else if(n == 'btn-insp'){
            try{ window._cocos_devtools.ie.begin_inspect() }catch(e){ }
        }
    });

    // update tree

    btn_dock.onclick = function(){
        btn_dock.dock = btn_dock.dock || 0;
        btn_dock.dock ++;
        if (btn_dock.dock == 4){
            btn_dock.dock = 0;
        }

        if (btn_dock.dock == 0){
            change_dock('bottom');
            localStorage.setItem('change_dock','bottom');
        }else if (btn_dock.dock == 1){
            change_dock('left');
            localStorage.setItem('change_dock','left');
        }else if (btn_dock.dock == 2){
            change_dock('top');
            localStorage.setItem('change_dock','top');
        }else if (btn_dock.dock == 3){
            change_dock('right');
            localStorage.setItem('change_dock','right');
        }
    };

    function change_dock(mode){
        if (mode == 'bottom'){
            el.style.position = 'static';
            el.style.width = 'auto';
            el.style.height = 'auto';
            el.style.top = 'auto';
            el.style.right = 'auto';

            left.style.width = '60%';
            left.style.height = 'calc(100% - 28px)';
            left.style.float = 'left';

            right.style.width = '40%';
            right.style.height = 'calc(100% - 28px)';
            right.style.float = 'left';

            el.children[2].style.height = '200px';
            el.parentNode.appendChild(el);
            window.scrollTo(0,document.body.clientHeight);
        }else if(mode == 'left'){
            el.style.position = 'absolute';
            el.style.width = '25%';
            el.style.height = '100%';
            el.style.top = '0px';
            el.style.right = 'auto';

            left.style.width = '100%';
            left.style.height = 'calc(60% - 30px)';
            left.style.float = 'none';

            right.style.width = '100%';
            right.style.height = '40%';
            right.style.float = 'none';

            el.children[2].style.height = 'calc(100% - 30px)';
            el.parentNode.appendChild(el);
            window.scrollTo(0,0);
        }else if (mode == 'top'){
            el.style.position = 'relative';
            el.style.width = 'auto';
            el.style.height = 'auto';
            el.style.top = 'auto';
            el.style.right = 'auto';

            left.style.width = '60%';
            left.style.height = 'calc(100% - 28px)';
            left.style.float = 'left';

            right.style.width = '40%';
            right.style.height = 'calc(100% - 28px)';
            right.style.float = 'left';

            el.children[2].style.height = '200px';
            el.parentNode.insertBefore(el,el.parentNode.children[0]);
            window.scrollTo(0,0);
        }else if(mode == 'right'){
            el.style.position = 'absolute';
            el.style.width = '25%';
            el.style.height = '100%';
            el.style.top = '0px';
            el.style.right = '0px';

            left.style.width = '100%';
            left.style.height = 'calc(60% - 30px)';
            left.style.float = 'none';

            right.style.width = '100%';
            right.style.height = '40%';
            right.style.float = 'none';

            el.children[2].style.height = 'calc(100% - 30px)';
            el.parentNode.appendChild(el);
            window.scrollTo(0,0);
        }
    }

    // remember dock
    (function(){
        var d = localStorage.getItem('change_dock') || 'bottom';
        change_dock(d);
        btn_dock.dock = {'bottom':0,'left':1,'top':2,'right':3}[d];
    })();
})(I18n);

(function(_this){
    var _cd = {};
    _this._cocos_devtools = _cd;
    // ui
    var tt, at, cf, sp, // ui
        ie, cfps, sph; // inject

    tt = new _this['TreeList'](document.getElementById('left'));
    tt.on_hover = function(nd){
        nd && nd.__data && ie && ie.draw_rect(nd.__data.id, tt.selected ? tt.selected.id : null);
    };
    tt.on_out = function(){
        ie && ie.draw_rect(null, tt.selected ? tt.selected.id : null);
    };
    tt.on_select = function(nd){
        nd && nd.__data && at && at.update(nd.__data.attr);
        nd && nd.__data && ie && ie.draw_rect(nd.__data.id, tt.selected ? tt.selected.id : null);
    };
    tt.on_before_toggle = function(nd, next){
        // clear current node's children
        tt.clear_children(nd);
        // get new data, and set to the node's __data, it's will re-load data as tree when next expanded
        nd.__is_not_inited = true;
        ie.get_node_children(nd.id, function(v){
            nd.__data.nodes = v;
            next();
        });
    };
    tt.on_after_toggle = function(nd){
        if (nd.children.length < 2){ // index 0 is <b>title</b>
            nd.className = 'nd';
        }
    };
    tt.on_remove = function(nd){
        // remove an arrow when a node is void.
        var p = document.getElementById(nd.parentId);// find parent
        if (p){
            p.__data.nodes = p.__data.nodes || [];
            if (p.__is_not_inited){
                p.__data.nodes.pop();
            }else{ // find by id
                for (var i=0,j=p.__data.nodes.length; i<j; i++){
                    if (p.__data.nodes[i] && p.__data.nodes[i].id == nd.id){
                        p.__data.nodes.slice(i,1);
                        break;
                    }
                }
            }
            //console.log(p.children, p.__data.nodes)
            if (p.className == 'nd c' && p.__data.nodes.length == 0){ // index 0 is <b>title</b>
                p.className = 'nd';
            }
            else if (p.className == 'nd e' && p.children.length < 2){
                p.className = 'nd';
            }
        }
        if(tt && nd && tt.selected && nd.id == tt.selected.id){ at.clear() }
    };
    tt.on_insert = function(nd){
        // show an arrow when a collapsed node is void.
        var p = document.getElementById(nd.parentId);// find parent
        if (p){
            p.__data.nodes = p.__data.nodes || [];
            if (p.__data.nodes.length == 0) p.__is_not_inited = true;
            if (p.className == 'nd'){
                p.className = 'nd c';
            }
            p.__data.nodes.push(nd); // add a place-holder
        }
    };

    at = new _this['AttrTable'](document.getElementById('right'));
    at.on_change = function(nd, attr, value){
        if (tt.selected){
            var attr_obj = {};// write an object for set attribute
            attr_obj[attr] = value;
            //tt.selected.__data.attr[attr] = value; // set the tree data
            tt.selected.__data.attr[attr].value = value; // set the tree data
            ie.modify_node(tt.selected.__data.id, attr_obj); // set the canvas
        }
    };

    cf = new _this['ChartFPS'](null, null, document.getElementById('container-profiles'));
    cf.element.style.width = '100%';
    cf.element.style.height = '100px';

    sp = new _this['ScaleProfiles'](document.getElementById('container-profiles'));
    sp.on_change = function(msg, value){
        if (msg == 'speed'){
            sph && sph.adjust && sph.adjust(value);
        }
    };

    //--------------------------------------------
    // inject

    var FpsCalc = function() {
        this.frames = 0;
        this.lastUpdate = Date.now();
        this.tick = function() {
            this.frames ++;
            var now = Date.now();
            var deltaTime = (now - this.lastUpdate) / 1000;
            if (deltaTime > cc.DIRECTOR_FPS_INTERVAL) {
                frameRate = this.frames / deltaTime;
                this.frames = 0;
                this.lastUpdate = now;
                return frameRate.toFixed(1);
            }
        }
    };
    cfps = new FpsCalc();
    cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_DRAW, function(){
        cf.fps(cfps.tick());
    });

    var SpeedHook = function(){
        return {
            speed: 1,
            bind: function(){
                var _this = this;
                if (cc.director.__calculateDeltaTime) return;
                cc.director.__calculateDeltaTime = cc.director.calculateDeltaTime;
                cc.director.calculateDeltaTime = function(){
                    cc.director._deltaTime = (1/cc.game.config.frameRate) * _this.speed;
                    cc.director._lastUpdate = Date.now();
                }
            },
            adjust: function(t){
                this.bind();
                this.speed = t;
            },
            unbind: function(){
                cc.director.calculateDeltaTime = cc.director.__calculateDeltaTime;
            }
        }
    };
    sph = new SpeedHook();

    ie = new InspectElement();

    ie.on_update = function(sc, scene_data){
        ie.draw_rect(null,null);
        at.clear();
        tt.update(scene_data);
        //console.log('update',scene_data);
    };
    ie.on_addChild = function(node, node_data, is_root){
        //console.log('addChild',node,node_data,node_data.parentId);
        if (is_root){
            tt.insert(node_data, tt.element); // add to root of tree
        }else{
            tt.insert(node_data, node_data.parentId); // add to a node of tree
        }
    };
    ie.on_removeChild = function(node, node_data, is_root){
        //console.log('removeChild',node,node_data,node_data.parentId);
        if (is_root){
            tt.remove(node_data, tt.element); // remove from root of tree
        }else{
            tt.remove(node_data, node_data.parentId); // remove from a node of tree
        }
    };
    ie.on_inspect_node = function(node_data, node_fullpath){
        tt.explore(node_fullpath);
    };
    ie.start();

    // load data first time
    ie.on_update(null, ie.get_node_children());



    // get global
    _cd.tt = tt, _cd.at = at, _cd.ie = ie;
    // current selected node
    _cd.__defineGetter__('curr', function(){ return ie.get_selected() });
})(this);



var _hmt = _hmt || [];
_hmt.push(['_trackEvent', 'Open', 'CocosDevtools']);
