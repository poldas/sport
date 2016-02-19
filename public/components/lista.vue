<template>
    <ul>
        <li v-for="item in lista">
            <a v-link="{ path: item.url || '/' }">{{item.name}}</a>
        </li>
    </ul>
</template>
<style>
    body{
        background-color: #f0ffef;
    }
</style>
<script>
    export default{
        props: ['lista']
    }
</script>