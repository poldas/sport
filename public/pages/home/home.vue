<template>
    <div class="panel-heading">
        Homepage default
    </div>
    <div class="panel-body">
       Wybierz dyscypline
        <list :lista="listData"></list>
    </div>
</template>
<style>
    body{
        background-color: #f0ffef;
    }
</style>
<script>
    export default{
        components: {
            list: require('../../components/lista.vue')
        },
        data(){
            return{
                listData:[
                    {
                        id: 1,
                        name: "Piłka nozna",
                        url: "/discipline/1"
                    },
                    {
                        id: 2,
                        name: "Siatkówka",
                        url: "/discipline/2"
                    }
                ]
            }
        }
    }
</script>