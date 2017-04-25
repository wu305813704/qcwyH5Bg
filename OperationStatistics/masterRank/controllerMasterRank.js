var app = angular.module("operation.masterRank",[]);
app.controller("controllerMasterRank",["$scope","$http",function ($scope,$http) {
    $(function(){
        var data = [
            {value : 496,color:'#05294d'},
            {value : 432,color:'#05294d'},
            {value : 410,color:'#05294d'},
            {value : 391,color:'#05294d'},
            {value : 387,color:'#05294d'},
            {value : 364,color:'#05294d'},
            {value : 350,color:'#05294d'},
            {value : 310,color:'#05294d'},
            {value : 280,color:'#05294d'},
            {value : 270,color:'#05294d'},
        ];

        new iChart.Bar2D({
            render : 'masterRank_FR',
            data: data,
            title : '员工月度评比表',
            showpercent:false,
//        decimalsnum:5,
            width : 800,
            height : 600,
            coordinate:{
                alternate_color:true,
                scale:[{
                    position:'bottom',
                    lebels:"",
                    scale_space:false
                }],
                axis:{
                    enable :false,
                    width:[0,0,0,0,]
                }
            },
        }).draw();
    });
}])