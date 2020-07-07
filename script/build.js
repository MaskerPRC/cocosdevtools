/**
 * author: martin.song
 * desc: 构建可直接注入网页脚本
 */
var fs=require('fs');
var err = fs.readFile('../setting.json','utf8',function (err, data) {
    if (err) return {err: "config file is not existed"};
    var settingConfig = JSON.parse(data);//读取的值
    var env_path = settingConfig && settingConfig['env'];
    if (env_path[env_path.length - 1] !== '\/' || env_path[env_path.length - 1] !== '\\') {
        env_path = env_path + "\/";
    }

    var bin_path = settingConfig && settingConfig['build'] && settingConfig['build']['bin'];
    if (bin_path[bin_path.length - 1] !== '\/' || bin_path[bin_path.length - 1] !== '\\') {
        bin_path = bin_path + "\/";
    }

    var bin_file = settingConfig && settingConfig['build'] && settingConfig['build']['file'];
    if (!bin_path || !bin_file) return {err: "config file is not valid"};
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

    var InspectElementConfig = fs.readFileSync(env_path + 'InspectElementConfig.js');
    var InspectElement = fs.readFileSync(env_path + 'InspectElement.js');
    var PipePage = fs.readFileSync(env_path + 'PipePage.js');
    var Injector = fs.readFileSync(env_path + 'injector.js');
    var TreeList = fs.readFileSync(env_path + 'TreeList.js');
    {
        var ScaleProfiles = fs.readFileSync(env_path + 'ScaleProfiles.js');
        var ChartFPS = fs.readFileSync(env_path + 'ChartFPS.js');
        var AttrTable = fs.readFileSync(env_path + 'AttrTable.js');
        var I18n = fs.readFileSync(env_path + 'I18n.js');
    }


    var outputFile = InspectElementConfig + InspectElement + PipePage + Injector + TreeList + ScaleProfiles + ChartFPS + AttrTable + I18n;

    console.log("output path: " + bin_path+bin_file);
    fs.writeFile(bin_path+bin_file, outputFile, function () {});
});

if(err && err.err) console.log(err.err);