<template>
    <div class="test-component">
        <h1>test component</h1>
        <div>
            <img src="/static/img/glogo.png" alt="">
            img from static
        </div>
        <h1>Img from proxy:</h1>
        <div>
            <img src="/demo/macbook_1.jpg" alt="">
            <img src="/demo/iphone_1.jpg" alt="">
            <img src="/demo/apple_cinema_30.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "product-list",
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
