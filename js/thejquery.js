/*
    JS_Flags_onmouseover
    jQuery
    BootStrap 4 / HTML5 / CSS3 / JavaScript
    /Code/Web/JS
    jQuery functions
*/

$(document).ready(function () {

    // Variables for flags
    var usa = "~ Cool USA flag ~";
    var eso = "~ Ebonheart Pact flag ~";
    var jpn = "~ Japanese flag ~";

    $("#imgusaflag").mouseover(function () {
        $("#txtflagname").val(usa);
    });
    $("#imgusaflag").mouseout(function () {
        $("#txtflagname").val("");
    });

    $("#imgesoflag").mouseover(function () {
        $("#txtflagname").val(eso);
    });
    $("#imgesoflag").mouseout(function () {
        $("#txtflagname").val("");
    });

    $("#imgjpnflag").mouseover(function () {
        $("#txtflagname").val(jpn);
    });
    $("#imgjpnflag").mouseout(function () {
        $("#txtflagname").val("");
    });
});