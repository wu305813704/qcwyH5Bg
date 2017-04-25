 var myApp1 = angular.module("First.one",[]);
myApp1.controller("controllerOne",["$scope",function ($scope) {
    $(function () {
        $(".year1").change(function () {
            var oVale = $(this).find("option:selected").text();
            $("#baoxiuYear").text(oVale);
        });
        $(".year2").change(function () {
            var oVale = $(this).find("option:selected").text();
            $("#yuyueYear").text(oVale);
        });
        $(".month2").change(function () {
            var oVale = $(this).find("option:selected").text();
            $("#yuyueMonth").text(oVale);
        });
        $(".month1").change(function () {
            var oVale = $(this).find("option:selected").text();
            $("#baoxiuMonth").text(oVale);
        });
        $(".date2").change(function () {
            var oVale = $(this).find("option:selected").text();
            $("#yuyueDate").text(oVale);
        });
        $(".date1").change(function () {
            var oVale = $(this).find("option:selected").text();
            $("#baoxiuDate").text(oVale);
        });
        $(".selectDescription").change(function () {
            var oVale = $(this).find("option:selected").text();
            $("#selectescription").text(oVale);
        });
        $("#select_paly_jigou").change(function () {
            var oVale = $(this).find("option:selected").text();
            $("#company").text(oVale);
        });
        $(".radio").on("click",function () {
            $(this).addClass("on").parent().siblings().find(".radio").removeClass("on");
        });
        $(".span400_1_1").on("click",function () {
            $(this).addClass("on").siblings().removeClass("on");
        });
        $(".sapn400queren").on("click",function () {

        })
    })
}]);
