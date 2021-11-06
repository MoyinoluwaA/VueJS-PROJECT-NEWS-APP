<template>

	<div class="home" :key="$route.fullPath">
		<div class="container">
			<div class="row gy-4">
				<div
					class="col-6 col-lg-4"
					v-for="(headline, index) in getCategoryNews"
					:key="index"
				>
					<Card :headline="headline" />
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../components/Card.vue";

export default {
	name: "Category",
	components: {
		Card,
	},
	watch: {
		'$route.params.category': function (category) {
			this.fetchCategoryNews(category)
		}
	},
	mounted() {
		const category = this.$route.params.category
		this.fetchCategoryNews(category)
	},
	computed: {
		...mapGetters(["getCategoryNews"]),
	},
	methods: {
		...mapActions(["fetchCategoryNews"]),
	},
}
</script>