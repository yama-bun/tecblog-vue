<template>
<div class="hello">
    <h1>FormA</h1>

    <input type="text" v-model="name" placeholder="input your name">
    <input type="text" v-model="msg" placeholder="input message">

    <label>Name: {{ name }}</label>
    <label>Message: {{ msg }}</label>
    <button v-on:click="check">Check</button>

</div>

</template>

<script>
export default {
    name: 'FromA',
    data() {
        return {
            name: '',
            msg: ''
        }
    },
    methods: {
        check() {
            alert('Your name is' + this.name)
        }
    }
}
</script>

<style scoped>
input[type="text"], label {
    display: block;
    text-align: center;
    margin: 0 auto 10px;
}
</style>