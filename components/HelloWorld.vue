<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
                    target="_blank">typescript</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
    </div>
</template>
  
<!-- <script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'HelloWorld',
    props: {
        msg: String,
    },
});
</script> -->

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getData } from '../services/service';
export default defineComponent({
    components: {

    },
    props: {
        msg: String,
    },
    setup() {
        const message = ref<string>('');
        return {
            message,
            data: ref<any[]>([])
        }
    },
    mounted() {

    },
    methods: {
        // getData() {
        //     return [3, 4, 5, 6, 7];
        // },
        changeMessage(message: string) {
            this.data = getData()
            if (message) {
                this.message = message;
            }
            else {
                this.message = 'No Message';
            }
        }
    }
})
</script>