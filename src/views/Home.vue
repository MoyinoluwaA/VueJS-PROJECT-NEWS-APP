<template>

	<div class="home">
		<div class="container">
			<Select :sources='getSources'/>
			<div class="row gy-4">
				<div class="col-6 col-lg-4" v-for='(headline, index) in getHeadlines' :key='index'>
					<Card :headline='headline' />
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Select from '../components/Select.vue'
import Card from '../components/Card.vue'

export default {
    name: 'Home',
	components: {
		Select,
		Card
	},
	mounted() {
		this.fetchHeadlines()
	},
    computed: {
		...mapGetters(['getSources', 'getHeadlines'])
	},
	methods: {
		...mapActions(['fetchHeadlines'])
	}
}
</script>