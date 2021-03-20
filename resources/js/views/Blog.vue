<template>
    <div class="">
        <h1>Blog page</h1>
        <spin v-if="loading"></spin>
        <div v-else style="display: flex">
            <post
                v-for="post in posts"
                :title="post.title"
                :date="post.created_at"
                :body="post.body"
            />
        </div>
    </div>
</template>

<script>
    import spin from "../components/Spin";
    import axios from 'axios';
    import post from "../components/Blog/Post"

    export default {
        components: {
            spin,
            post
        },
        data: () => ({
            loading: true,
            posts: []
        }),
        mounted() {
            this.loadPosts()
        },
        methods: {
            loadPosts() {
                axios.get('/api/posts')
                    .then(res => {
                        this.posts = res.data;
                        setTimeout(() => {
                            this.loading = false;
                        }, 500)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
