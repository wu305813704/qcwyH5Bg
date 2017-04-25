var myApp = angular.module("businessManage.staffList",[]);
myApp.controller("controllerStaffList",["$scope",function ($scope) {
    $(function () {
        $("#selectROle1").change(function () {
            var oVale = $(this).find("option:selected").text();
            $(".selectROle").text(oVale);
        });
        $("#typeSelect").change(function () {
            var oVale = $(this).find("option:selected").text();
            $(".typeSelectValue").text(oVale);
        });
        $(".selectName1").change(function () {
            var oVale = $(this).find("option:selected").text();
            $("#selectStaffName").text(oVale);
        });
        $(".span400_1_1").on("click",function () {
            $(this).addClass("on").siblings().removeClass("on");
        });
        $(".addStaff").on("click",function () {
            alert(1)
            $(".mark1").css("display","block");
            $("#addStaff").css("display","block");
        });
        $(".addStaff_TopR").on("click",function () {
            $(".mark1").css("display","none");
            $("#addStaff").css("display","none");
        });
        $(".addStaff_Btomqueren").on("click",function () {
            $(".mark1").css("display","none");
            $("#addStaff").css("display","none");
        });
        $(".addStaff_Btomreset").on("click",function () {
            $(".mark1").css("display","none");
            $("#addStaff").css("display","none");
        });
        $(".top_P2").on("click",function () {
            alert("nihao");
            $(".mark1").css("display","block");
            $("#orderDescription").css("display","block");
        })
    })
}]);
