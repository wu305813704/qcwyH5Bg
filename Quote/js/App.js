function getHash() {
    var url = location.hash.substr(2);
    var aaa = url.split("/");
    var arr = [];
    console.log(aaa);
    var str = "";
    for (var i = 0;i <aaa.length;i++){
      str = "#"+aaa[i]  ;
      console.log(str);
      arr.push(str);
    }
    return arr;
}
getHash();
var paths = getHash()
console.log(paths);
if (paths[0] == "#" ){
    $("#First").addClass("on")
}else{
    $(paths[0]).addClass("on");
}
var myApp1 = angular.module("myApp",
            [
                'ui.router',
                "First.one",
                "businessManage.staffList",
                "marketManage.partList",
                "marketManage.repairOder",
                "marketManage.advanceOrder",
                "marketManage.historyOrder",
                "marketManage.confirm",
                "marketManage.historyApplyfor",
                "operation.masterMap",
                "operation.masterRank",
                "operation.areaAddRate",
                "operation.newIncreased",
                "operation.mounthRate",
                "operation.masterDaily",
                "operation.userDaily",
                "operation.manageDaily",
                "userManage.userList",
                "userManage.userManage",
                "systemManage.passWord",
                "systemManage.payManage",
                "systemManage.roleSet",
                "systemManage.systemSet",
                "systemManage.systemType",
                "systemManage.weixinPay",
                "basicData.partList1",
                "basicData.basicDataStock",
                "callCenter.allCenter",
                "callCenter.waitOrder",
                "callCenter.overTimeOrder",
                "callCenter.teacherReassignment",
                "callCenter.serviceOrder",
                "callCenter.historyOrder",
                "callCenter.returnVisit",
                "basicData.basicDataBuy"
            ]);
myApp1.controller('homeController',function ($scope) {

});
myApp1.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/First");
    $stateProvider
        .state("First", {
            url: '/First',
            templateUrl:'First.html',
            controller:function ($state) {
               $state.go("First.one");
                var index = 1;
                $(".wrap_MFl_ul_top").on("click",function () {
                    index *= -1;
                    $(".ulList").slideToggle("fast",function () {
                        if (index == 1){
                            $(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_xl_pre.png");
                        }else{
                            $(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_shou.png");
                        }
                    })
                });
                $(".ulListOn").on("click",function () {
                    $(this).addClass("on").parent().siblings().find("a").removeClass("on");
                });
            }
        }).state("First.one",{
        url:"/one",
        templateUrl: '400Paidan/one.html',
        controller:"controllerOne",
        // controller: function ($scope) {
        //     $scope.title = "400派单";
        //
        // }
    }).state("First.two",{
        url:"/two",
        templateUrl:"../CallCenter/waitOrder/waitOrder.html",
        controller:"controllerWaitOrder"
    }).state("First.three",{
        url:"/three",
        templateUrl:"../CallCenter/overTimeOrder/overTimeOrder.html",
        controller:"controllerOverTimeOrder"
    }).state("First.four",{
        url:"/four",
        templateUrl:"../CallCenter/serviceOrder/serviceOrder.html",
        controller:"controllerServiceOrder"
    }).state("First.five",{
        url:"/five",
        templateUrl: '../Operationstatistics/masterMap/masterMap.html',
        controller: "controllerMasterMap"
    }).state("First.six",{
        url:"/six",
        templateUrl: '../marketManagement/partManage/partList.html',
        controller: "controllerPartList"
    }).state("First.seven",{
        url:"/seven",
        templateUrl:"../BasicData/basicDataStock/basicDataStock.html",
        controller:"controllerBasicDataStock"
    }).state("First.eight",{
        url:"/eight",
        templateUrl: '../marketManagement/advanceOrder/advanceOrder.html',
        controller: "controlleradvanceOrder"
    }).state("First.nine",{
        url:"/nine",
        templateUrl:"../CallCenter/allCenter/allCenter.html",
        controller:"controllerAllCenter"
    }).state("businessManage",{
        url:"/businessManage",
        templateUrl: '../BusinessManagement/businessManage.html',
        controller: function ($state) {
            //$state.go("businessManage.staffList");
            var index = 1;
            $(".wrap_MFl_ul_top").on("click",function () {
                index *= -1;
                $(".ulList").slideToggle("fast",function () {
                    if (index == 1){
                        $(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_xl_pre.png");
                    }else{
                        $(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_shou.png");
                    }
                })
            });
            $(".ulListOn").on("click",function () {
                $(this).addClass("on").parent().siblings().find("a").removeClass("on");
            });
        }
    }).state("businessManage.staffList",{
        url:"/staffList",
        templateUrl: '../BusinessManagement/staffList.html',
        controller: "controllerStaffList"

    }).state("marketManage",{
        url:"/marketManage",
        templateUrl: '../MarketManagement/marketManage.html',
        controller: function ($state) {
            var index = 1;
            $(".wrap_MFl_ul_top").on("click",function () {
                $(this).parent().find(".ulList").slideToggle("fast",function () {
                    index *= -1;
                    alert(index);
                    if (index == 1){
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_xl_pre.png");
                    }else{
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_shou.png");
                    }
                })
            });
            $(".ulListOn").on("click",function () {
                $(this).addClass("on").parent().siblings().find("a").removeClass("on");
            });
        }
    }).state("marketManage.partList",{
        url:"/partList",
        templateUrl: '../marketManagement/partManage/partList.html',
        controller: "controllerPartList"
    }).state("marketManage.repairOder",{
        url:"/repairOder",
        templateUrl: '../MarketManagement/repairOrder/repairOder.html',
        controller: "controllerRepairOrder"
    }).state("marketManage.advanceOrder",{
            url:"/advanceOrder",
            templateUrl: '../marketManagement/advanceOrder/advanceOrder.html',
            controller: "controlleradvanceOrder"
    }).state("marketManage.historyOrder",{
        url:"/historyOrder",
        templateUrl: '../marketManagement/historyOrder/historyOrder.html',
        controller: "controllerhistoryOrder"
    }).state("marketManage.confirm",{
        url:"/confirm",
        templateUrl: '../marketManagement/confirm/confirm.html',
        controller: "controllerconfirm"
    }).state("marketManage.historyApplyfor",{
        url:"/historyApplyfor",
        templateUrl: '../marketManagement/historyApplyfor/historyApplyfor.html',
        controller: "controllerhistoryApplyfor"
    }).state("operation",{
        url:"/operation",
        templateUrl: '../OperationStatistics/operation.html',
        controller: function ($state) {
            var index = 1;
            $(".wrap_MFl_ul_top").on("click",function () {
                $(this).parent().find(".ulList").slideToggle("fast",function () {
                    index *= -1;
                    alert(index);
                    if (index == 1){
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_xl_pre.png");
                    }else{
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_shou.png");
                    }
                })
            });
            $(".ulListOn").on("click",function () {
                $(this).addClass("on").parent().siblings().find("a").removeClass("on");
            });
        }
    }).state("operation.masterMap",{
        url:"/masterMap",
        templateUrl: '../Operationstatistics/masterMap/masterMap.html',
        controller: "controllerMasterMap"
    }).state("operation.masterRank",{
        url:"/masterRank",
        templateUrl: '../Operationstatistics/masterRank/masterRank.html',
        controller: "controllerMasterRank"
    }).state("operation.areaAddRate",{
        url:"/areaAddRate",
        templateUrl: '../Operationstatistics/areaAddRate/areaAddRate.html',
        controller: "controllerareaAddrate"
    }).state("operation.newIncreased",{
        url:"/newIncreased",
        templateUrl: '../Operationstatistics/NewIncreased/newIncreased.html',
        controller: "controllerNewIncreased"
    }).state("operation.mounthRate",{
        url:"/mounthRate",
        templateUrl: '../Operationstatistics/mounthRate/mounthRate.html',
        controller: "controllerMounthRate"
    }).state("operation.masterDaily",{
        url:"/masterDaily",
        templateUrl: '../Operationstatistics/masterDaily/masterDaily.html',
        controller: "controllerMasterDaily"
    }).state("operation.manageDaily",{
        url:"/manageDaily",
        templateUrl: '../Operationstatistics/manageDaily/manageDaily.html',
        controller: "controllerManageDaily"
    }).state("operation.userDaily",{
        url:"/userDaily",
        templateUrl: '../Operationstatistics/userDaily/userDaily.html',
        controller: "controllerUserDaily"
    }).state("userManage",{
        url:"/userManage",
        templateUrl: '../UserManagement/userManage.html',
        controller: function ($state) {
            var index = 1;
            $(".wrap_MFl_ul_top").on("click",function () {
                $(this).parent().find(".ulList").slideToggle("fast",function () {
                    index *= -1;
                    alert(index);
                    if (index == 1){
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_xl_pre.png");
                    }else{
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_shou.png");
                    }
                })
            });
            $(".ulListOn").on("click",function () {
                $(this).addClass("on").parent().siblings().find("a").removeClass("on");
            });
        }
    }).state("userManage.userList",{
        url:"/userList",
        templateUrl: '../UserManagement/userList/userList.html',
        controller: "controllerUserList"
    }).state("userManage.userManage",{
        url:"/userManage",
        templateUrl: '../UserManagement/userManage/userManage.html',
        controller: "controllerUserDaily"
    }).state("systemManage",{
        url:"/systemManage",
        templateUrl:"../SystemManagement/systemManage.html",
        controller:function () {
            var index = 1;
            $(".wrap_MFl_ul_top").on("click",function () {
                $(this).parent().find(".ulList").slideToggle("fast",function () {
                    index *= -1;
                    alert(index);
                    if (index == 1){
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_xl_pre.png");
                    }else{
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_shou.png");
                    }
                })
            });
            $(".ulListOn").on("click",function () {
                $(this).addClass("on").parent().siblings().find("a").removeClass("on");
            });
        }
    }).state( "systemManage.passWord",{
        url:"/passWord",
        templateUrl: '../SystemManagement/changePassword/changePassword.html',
        controller: "controllerChangePassword"
    }).state("systemManage.payManage",{
        url:"/payManage",
        templateUrl: '../SystemManagement/payManage/payManage.html',
        controller: "controllerPayManage"
    }).state("systemManage.roleSet",{
        url:"/userList",
        templateUrl: '../SystemManagement/roleSet/roleSet.html',
        controller: "controllerRoleSet"
    }).state("systemManage.systemSet",{
        url:"/systemSet",
        templateUrl: '../SystemManagement/systemSet/systemSet.html',
        controller: "controllerSystemSet"
    }).state("systemManage.systemType",{
        url:"/systemType",
        templateUrl: '../SystemManagement/systemType/systemType.html',
        controller: "controllerSystemType"
    }).state("systemManage.weixinPay",{
        url:"/weixinPay",
        templateUrl: '../SystemManagement/weixinPay/weixinPay.html',
        controller: "controllerWeixinPay"
    }).state("basicData",{
        url:"/basicData",
        templateUrl:"../BasicData/basicData.html",
        controller:function () {
            var index = 1;
            $(".wrap_MFl_ul_top").on("click",function () {
                $(this).parent().find(".ulList").slideToggle("fast",function () {
                    index *= -1;
                    alert(index);
                    if (index == 1){
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_xl_pre.png");
                    }else{
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_shou.png");
                    }
                })
            });
            $(".ulListOn").on("click",function () {
                $(this).addClass("on").parent().siblings().find("a").removeClass("on");
            });
        }
    }).state("basicData.partList1",{
        url:"/partList1",
        templateUrl:"../BasicData/partManage/partList.html",
        controller:"controllerPartList1"
    }).state("basicData.basicDataBuy",{
        url:"/basicDataBuy",
        templateUrl:"../BasicData/basicDataBuy/basicDataBuy.html",
        controller:"controllerBasicDataBuy"
    }).state("basicData.basicDataStock",{
        url:"/basicDataStock",
        templateUrl:"../BasicData/basicDataStock/basicDataStock.html",
        controller:"controllerBasicDataStock"
    }).state("callCenter",{
        url:"/callCenter",
        templateUrl:"../CallCenter/callCenter.html",
        controller:function () {
            var index = 1;
            $(".wrap_MFl_ul_top").on("click",function () {
                $(this).parent().find(".ulList").slideToggle("fast",function () {
                    index *= -1;
                    alert(index);
                    if (index == 1){
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_xl_pre.png");
                    }else{
                        $(this).parent().parent().find(".wrap_MFl_ul_top_img2").attr("src","../Quote/img/home/leftbar_shou.png");
                    }
                })
            });
            $(".ulListOn").on("click",function () {
                $(this).addClass("on").parent().siblings().find("a").removeClass("on");
            });
        }
    }).state("callCenter.allCenter",{
        url:"/allCenter",
        templateUrl:"../CallCenter/allCenter/allCenter.html",
        controller:"controllerAllCenter"
    }).state("callCenter.waitOrder",{
        url:"/waitOrder",
        templateUrl:"../CallCenter/waitOrder/waitOrder.html",
        controller:"controllerWaitOrder"
    }).state("callCenter.overTimeOrder",{
        url:"/overTimeOrder",
        templateUrl:"../CallCenter/overTimeOrder/overTimeOrder.html",
        controller:"controllerOverTimeOrder"
    }).state("callCenter.teacherReassignment",{
        url:"/teacherReassignment",
        templateUrl:"../CallCenter/teacherReassignment/teacherReassignment.html",
        controller:"controllerTeacherReassignment"
    }).state("callCenter.serviceOrder",{
        url:"/serviceOrder",
        templateUrl:"../CallCenter/serviceOrder/serviceOrder.html",
        controller:"controllerServiceOrder"
    }).state("callCenter.historyOrder",{
        url:"/historyOrder",
        templateUrl:"../CallCenter/historyOrder/historyOrder.html",
        controller:"controllerHistoryOrderOne"
    }).state("callCenter.returnVisit",{
        url:"/returnVisit",
        templateUrl:"../CallCenter/returnVisit/returnVisit.html",
        controller:"controllerReturnVisit"
    })
});

