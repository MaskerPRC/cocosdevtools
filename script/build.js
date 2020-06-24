/**
 * author: martin.song
 * desc: 构建可直接注入网页脚本
 */
var fs=require('fs');
fs.readFile('../setting.json','utf8',function (err, data) {
    if(err) return;
    var test1=JSON.parse(data);//读取的值
    var path = test1['build']['path'];
    //读取配置路径：js的json相关操作

    //根据文件名生成slotsPlugin.js
    var head = "/**\n" +
        " * alter by martin.song\n" +
        " * 图形化gui调试工具\n" +
        " * @constructor\n" +
        " */\n" +
        "\n" +
        "var DebugGuiUtil = function () {\n" +
        "\n" +
        "        (function () {\n" +
        "                (function (aa) {";

    var foot = "})(window);\n" +
        "        })();\n" +
        "}\n" +
        "\n" +
        "module.exports = DebugGuiUtil;";

//1111: InspectElementConfig
    //2222: InspectElement
    //3333: PipePage
    //4444: Injector {TreeList,}
    //5555: TreeList
    //6666: ScaleProfiles
    //7777：AttrTable
    //8888: ChartFPS
    //9999: I18n
    //10101010: web界面
    //11111111: 其他

});

