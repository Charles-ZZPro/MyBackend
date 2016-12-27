<template>
    <div id="project">
        <el-breadcrumb separator=">" class="zhTitle">
            项目列表
        </el-breadcrumb>
        <ul>
            <li  v-for="(item,index) in items" @click="showName(index)" class="zh-project-detail">
                <router-link :to="'/home/project/'+index" tag="div">
                    <h1>{{item.title}}</h1>
                    <div>总计激活数：{{item.number}}</div>
                </router-link>
            </li>
        </ul>



    </div>

</template>

<script>
    import store from '../vuex/store'
    export default{
        mounted: function() {
            this.getCustomers()
        },         
        methods:{
            showName (str){
                var obj={'title':this.items[str].title,'number':this.items[str].number,'id':this.items[str].id}

                sessionStorage.setItem('_obj',JSON.stringify(obj))
                var _msg=JSON.parse(sessionStorage.getItem('_obj'))

                this.$bus.emit('showmsg')
                this.shareState.record.name=this.items[str].title
                this.shareState.record.number=this.items[str].number
                this.shareState.record.id=this.items[str].id


            },
            getCustomers: function() {


                this.$http.jsonp(this.apiUrl,
                    {
                        jsonp:'_cb_mine'
                    }
                    )
                    .then(function(response) {
                        //console.log(response)
                        this.items = response.data.tuple
                        //console.log("not fucked")
                        //console.log(this.items)
                    }, function(response) {
                        //console.log("my site JSON fucked")
                    })
            }            
            

        },
        watch:{

        },
        data(){
            return {


                items:[
                    //{title:'第一个项目',number:100},
                    //{title:'第二个项目',number:300},
                    //{title:'第三个项目',number:500},
                ],
                shareState:store.state,		
                apiUrl: 'http://127.0.0.1:8099/act_cnt/get_active_totalnums'

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
    #project .zhTitle{
        height: pxCount(50);
        line-height: pxCount(50);
        font-size: 16px;
        margin-bottom: pxCount(20);
        overflow: hidden;


    }
    .zh-title span{
        margin:0;
    }
    .zh-project-detail{
        display: block;
        float: left;
        width:pxCount(300);
        height: pxCount(200);
        background: #f0f2f7;
        list-style: none;
        margin-right: pxCount(50);
        margin-bottom: pxCount(50);
        text-align: center;
        cursor: pointer;
        border: 1px solid #d8d8d8;
    }
    .zh-project-detail h1{
        margin-top: pxCount(50);
        margin-bottom: pxCount(20);
    }
    .zh-project-detail:hover{
        border: 1px solid blue;
    }
</style>
