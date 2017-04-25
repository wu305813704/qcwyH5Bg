var app =angular.module("operation.newIncreased",[]);
app.controller("controllerNewIncreased",["$scope","$http",function ($scope,$http) {
    $(function(){
        var data = [
            {
                name : '',
                value:[,1200,1500,2200,2600,3000,3200,4200,1800,1200],
                //折现的颜色
                color:'#02a592',
                //折现的宽度
                line_width:1,
                //labels:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
            }
        ];
        var chart = new iChart.LineBasic2D({
            render : 'ichartZhexian',
            data: data,
            title : '',
            width : 1200,
            height : 450,
            coordinate:{
                alternate_color:true,
                height:'90%',
                background_color:'#ffffff',
                axis:{
                    color:'#02a592',
                    width:[0,0,1,1]
                },scale:[{//配置自定义值轴
                    position:'left',	//配置左值轴，即纵轴
                    start_scale:0,
                    scale2grid:false,
                    end_scale:5000,
                    scale_space:1000,
                    scale_size:100,//设置刻度间距
                    scale_enable : false,
                    label : {color:'#02a592',font : '微软雅黑',fontsize:18},
                    scale_color:'#9f9f9f'
                },{
                    position:'bottom',	//配置底值轴，即横轴
                    scale_size:140,//设置刻度间距
                    label : {color:'#02a592',font : '微软雅黑',fontsize:18},
                    scale_enable : false,
                    labels:["","3月1日","3月2日","3月3日","3月4日","3月5日","3月6日","3月7日","3月8日","3月9日"]//自定义的标签文本。(默认为空数组)					}]
                }],
                grids:{
                    horizontal:{
                        way:'share_alike',
                        value:5
                    },
                    vertical:{
                        way:'share_alike',
                        value:0
                    }
                }
            },
            sub_option:{
                hollow_inside:false,//设置一个点的亮色在外环的效果
                point_size:16
            },
           // labels:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
        });
        chart.draw();
    });
}])
// coordinate:{////配置自定义坐标轴
//         width:640,
//         height:260,
//         striped_factor : 0.18,
//         grid_color:'#4e4e4e',
//         axis:{
//         color:'#252525',
//             width:[0,0,4,4]
//     },
//     scale:[{//配置自定义值轴
//         position:'left',	//配置左值轴，即纵轴
//         start_scale:0,
//         end_scale:100,
//         scale_space:10,
//         scale_size:2,//设置刻度间距
//         scale_enable : false,
//         label : {color:'#9d987a',font : '微软雅黑',fontsize:11,fontweight:600},
//         scale_color:'#9f9f9f'
//     },{
//         position:'bottom',	//配置底值轴，即横轴
//         scale_size:3,//设置刻度间距
//         label : {color:'#9d987a',font : '微软雅黑',fontsize:11,fontweight:600},
//         scale_enable : false,
//         labels:labels//自定义的标签文本。(默认为空数组)					}]
//     }]