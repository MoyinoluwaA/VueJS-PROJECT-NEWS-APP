<template>

    <div class='filter-box'>
        <select name='filters' @change='onChange($event)'>
            <option v-for="(source, index) in sources" :key='index' :value="source.id || 'google-news'">{{ source.name }}</option>
        </select>
    </div>
    
</template>

<script>
export default {
    mounted() {
        console.log(this.sources)
    },
    props: {
        sources: Array
    },
    methods: {
        onChange(e) {
            console.log(e.target.value)
        }
    }
}
</script>