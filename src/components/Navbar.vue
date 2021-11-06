<template>

    <nav id="nav">
        <ul class="nav">
            <li>
                <router-link :to="{ name: 'Category', params: { category: 'business'} }">Business</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Category', params: { category: 'entertainment'} }">Entertainment</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Category', params: { category: 'health'} }">Health</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Category', params: { category: 'science'} }">Science and Technology</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Category', params: { category: 'sports'} }">Sports</router-link>
            </li>
        </ul>
    </nav>

</template>

<script>
import { routePath } from '../router/routes'

export default {
    data() {
        return {
            routePath
        }
    }

}
</script>