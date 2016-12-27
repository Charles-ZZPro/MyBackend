<template>
    <div>
        这是财务数据展示页面
    </div>

</template>
<script>
    export default {
        beforeRouteEnter (to,from,next) {
            if(from.path ==='/login'){
                if(localStorage.getItem('username')==''){
                    next({
                        path:'/login',
                        query:{redirect: to.fullPath}
                    })
                }else{
                    next()
                }
            }else{
                next()
            }
        }
    }
</script>