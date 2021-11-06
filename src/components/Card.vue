<template>

    <div class="card">
        <img class='card-img' :src='headline.urlToImage || imgUrl' :alt='headline.title'/>

        <div class="card-text">
            <p class='card-text-title'>{{ headline.title }}</p>
            <p class='card-text-author'>Author: <span class="card-author">{{ headline.author || 'Moyin' }}</span></p>
            <div class="card-footer">
                <a class="card-btn" :href='headline.url' target='_blank'>Read more</a>
                <span>Source: <span class="d-block">{{ headline.source.name }}</span></span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Card',
    props: {
        headline: Object
    },
    data() {
        return {
            imgUrl: 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='
        }
    }
}
</script>