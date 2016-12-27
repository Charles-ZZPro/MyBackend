<template>
    <div id="detail" >
        <el-breadcrumb separator=">" class="zhTitle">
            <el-breadcrumb-item :to="{ path: '/home/project' }" >项目列表</span></el-breadcrumb-item>
            <el-breadcrumb-item  >{{shareState.record.name}}</el-breadcrumb-item>
            <el-breadcrumb-item >{{zhmessage}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row class="zh-number">
            <el-col :span="24"  >
                总计激活数：<span v-text="shareState.record.number"></span>

            </el-col>
        </el-row>
        <el-row class="zh-number">
            <el-col :span="24">
                <el-date-picker
                        type="daterange"
                        v-model="value"
                        placeholder="选择时间范围">
                </el-date-picker>
<!--             </el-col> -->
<!--         </el-row> -->
                <button v-on:click="getCustomersFilter">筛选</button>
            </el-col>
        </el-row>        
        <el-table :data="tableData" border style="width: 100%"  height=500 class="zh-table">
            <el-table-column prop="date" label="日期" style="width:33%"></el-table-column>
            <el-table-column prop="dayNumber" label="当日激活数" style="width:33%"></el-table-column>
            <el-table-column prop="totalNumber" label="累计激活数" style="width:33%"></el-table-column>
        </el-table>
<!--         <el-row class="zh-page">
            <el-col :span="24">
                <el-pagination
                        small
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </el-col>
        </el-row> -->


    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'
    import store from '../vuex/store'
    export default{
        mounted: function() {
            //this.getCustomers()
            //this.detailmsg()
        },        
        methods:{
            /*detailmsg:function () {
                var _msg=JSON.parse(sessionStorage.getItem('_obj'))
                this.name=_msg.title
                this.number=_msg.number
            },*/	
            detailmsg:function (){
                var _msg=JSON.parse(sessionStorage.getItem('_obj')) 
                this.name=_msg.title
                this.number=_msg.number
                this.id=_msg.id
                //this.id = this.shareState.record.id
                //shareState
                //console.log("detail msg!!!!")
                //console.log(this.id)
                this.getCustomers()
            },
            getCustomers: function() {
                ///console.log("ffffffffffffffff")
                ///console.log(this.name)
                var _msg=JSON.parse(sessionStorage.getItem('_obj')) 
                var apiUrl_local = this.apiUrl + this.id
                this.$http.jsonp(apiUrl_local,
                    {
                        jsonp:'_cb_mine'
                    }
                    )
                    .then(function(response) {
                        //console.log(response)
                        this.tableData = response.data.tuple
                        console.log("para detail not fucked")
                        console.log(this.tableData)
                    }, function(response) {
                        console.log("my site para detail JSON fucked")
                    })
            },
            getCustomersFilter: function() {
                ///console.log("ffffffffffffffff")
                ///console.log(this.name)
                var _msg=JSON.parse(sessionStorage.getItem('_obj')) 
                var apiUrl_local = this.apiUrl_filter + this.id + "&value="+this.value
                this.$http.jsonp(apiUrl_local,
                    {
                        jsonp:'_cb_mine'
                    }
                    )
                    .then(function(response) {
                        //console.log(response)
                        this.tableData = response.data.tuple
                        console.log("para detail filtering   not fucked")
                        console.log(this.tableData)
                    }, function(response) {
                        console.log("my site para detail  filtering   JSON fucked")
                    })
            },            
            updateMessage:function (e) {
                this.$store.commit('updateMessage',e.target.value)
            }	               
        },
        created:function () {

            this.$bus.on('showmsg',this.detailmsg)

        },

        data (){
            console.log("data getting !!!!!!!!!!!! ")
            return {
                zhmessage:'统计数据',
                name:'',
                number:'',
                id:'',
                //proj_id:'',
                //value: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                value: '',
                tableData:[
                // {
                //     date:'2016-10-29',dayNumber:'11111',totalNumber:'222234'
                // },{
                //     date:'2016-10-30',dayNumber:'2222',totalNumber:'321453'
                // },{
                //     date:'2016-10-31',dayNumber:'3333',totalNumber:'865422'
                // },{
                //     date:'2016-11-01',dayNumber:'4444',totalNumber:'908351'
                // }
                ],
                currentPage:1,
                pageSize:10,
                shareState:store.state,                
                apiUrl: 'http://127.0.0.1:8099/act_cnt/get_active_dailynums?proj_id=',
                apiUrl_filter: 'http://127.0.0.1:8099/act_cnt/get_active_dailynums_filter?proj_id=',
                //apiUrl: 'http://127.0.0.1:8099/act_cnt/get_active_dailynums?proj_id='
            }
        },

    }
</script>
<style lang="sass">
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,
    legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }

    $basePx:960;
    @function pxCount($px){
    @return $px/$basePx+rem;
    }
    #detail{
        font-size: 16px;
    }
     #detail .zhTitle{
        height: pxCount(50);
        line-height: pxCount(50);
        font-size: 16px;
        margin-bottom: pxCount(20);
        overflow: hidden;
         cursor: pointer;

    }
    .zh-title span{
        margin:0;
    }

    .zh-number{
        margin-bottom: pxCount(30);
    }
    .zh-page{
        margin-top: pxCount(30);
        text-align: right;
    }
    .zh-table{
        cursor: pointer;
    }
</style>