<template>
    <div class="">
        <Spin v-if="loading"></Spin>
        <div v-else>
            <h1>{{post.title}} <span class="uk-badge">{{post.created_at}}</span></h1>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
    import Spin from '../components/Spin'
    import axios from "axios";



    export default {
        data: () => ({
            loading: true,
            post: []
        }),
        components: {
            Spin
        },
        mounted() {
            this.loadPost(this.$route.params.id)
        },
        methods:{
            loadPost(id){
                axios.get('/api/posts/' + id)
                .then(res => {
                    this.post = res.data
                    this.loading = false
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
