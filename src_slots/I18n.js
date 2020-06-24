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