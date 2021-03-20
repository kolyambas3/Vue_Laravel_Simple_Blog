<template>
    <div class="">
        <div class="uk-alert-danger" uk-alert v-if="error">
            <a class="uk-alert-close" uk-close></a>
            <p>Проверьте правильность данных</p>
        </div>
        <form>
            <fieldset class="uk-fieldset">

                <legend class="uk-legend">Создание поста</legend>

                <div class="uk-margin">
                    <input class="uk-input" v-model="form.title" type="text" placeholder="Input">
                </div>

                <div class="uk-margin">
                    <textarea class="uk-textarea" v-model="form.body" rows="5" placeholder="Textarea"></textarea>
                </div>

            </fieldset>
            <button class="uk-button uk-button-primary" @click.prevent="store()">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data: () => ({
            form: {
                title: "",
                body: ""
            },
            error: false
        }),
        mounted() {

        },
        methods: {
            store() {
                axios.post('/api/posts', this.form, {
                    headers: {
                        "Content-type":"application/json"
                    }
                })
                .then(res=>{
                    if(res.data.status){
                        this.$router.push('/posts/' + res.data.post.id)
                    } else {
                        this.error = true
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
