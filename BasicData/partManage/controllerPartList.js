var myApp1 = angular.module("basicData.partList1",[]);
myApp1.controller("controllerPartList1",["$scope",function ($scope) {
   $(function () {
       $(".top_PFl span").on("click",function () {
           $(this).addClass("on").siblings().removeClass("on");
       });
       $(".selectName2").change(function () {
           var oVale = $(this).find("option:selected").text();
           $("#selectStaffName1").text(oVale);
       });
       $(".span400_1_1").on("click",function () {
           $(this).addClass("on").siblings().removeClass("on");
       });
       $("#addStaffAdd").on("click",function () {
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
   })
}]);
