var app = angular.module("marketManage.confirm",[]);
app.controller("controllerconfirm",["$scope","$http",function ($scope,$http) {
    $("#top_pOperationConfirmR").on("click",function () {
        $(".mark1").css("display","block");
        $("#bohui").css("display","block");
    });
    $(".sapn400reset").on("click",function () {
        $(".mark1").css("display","none");
        $("#bohui").css("display","none");
    });
    $(".sapn400queren").on("click",function () {
        $(".mark1").css("display","none");
        $("#bohui").css("display","none");
    });
    $(".span400_1_1").on("click",function () {
        $(this).addClass("on").siblings().removeClass("on");
    });
    $("#top_pOperationConfirmL").on("click",function () {
        $(".mark1").css("display","block");
        $("#confirmOrderDescription").css("display","block");
    });
    $(".addStaff_TopR").on("click",function () {
        $(".mark1").css("display","none");
        $("#confirmOrderDescription").css("display","none");
    });
}]);