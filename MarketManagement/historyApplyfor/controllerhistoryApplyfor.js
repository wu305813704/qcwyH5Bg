var app = angular.module("marketManage.historyApplyfor",[]);
app.controller("controllerhistoryApplyfor",["$scope","$http",function ($scope,$http) {
    $("#historyApply").on("click",function () {
        $(".mark1").css("display","block");
        $("#confirmOrderDescription").css("display","block");
    });
    $(".addStaff_TopR").on("click",function () {
        $(".mark1").css("display","none");
        $("#confirmOrderDescription").css("display","none");
    });
}]);