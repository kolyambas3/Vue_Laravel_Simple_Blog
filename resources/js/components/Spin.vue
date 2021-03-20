<template>
    <div uk-spinner class="spin"></div>
</template>

<script>
    export default {
        name: "Spin"
    }
</script>

<style scoped>
    .spin{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50);
    }
</style>
