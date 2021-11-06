<template>

    <header>
        <div class="container py-4">
            <div>
                <router-link :to='routePath.homepage' class="brand">NEWS<span class='brand-small'>info</span></router-link>
            </div>
        </div>
        <Navbar />
    </header>

</template>

<script>
import { routePath } from '../router/routes'
import Navbar from './Navbar.vue'

export default {
    name: 'Header',
    data() {
        return {
            routePath
        }
    },
    components: {
        Navbar
    }
}
</script>