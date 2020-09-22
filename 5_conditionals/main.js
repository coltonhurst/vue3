const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    },
    methods: {
        swap() {
            this.seen = !this.seen
        }
    }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
