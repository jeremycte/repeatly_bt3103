<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <transition name="fade">
        <slot />
    </transition>
  </router-link>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
    props: {
        to: {type: String, required: true},
    },
    setup(props){
        const route = useRoute()
        const isActive = computed(() => route.path == props.to)
        return {isActive}
    }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.link {
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
    text-transform: capitalize;
    margin: 20px;
    padding: 0.4em;
    border-radius: 0.5em;
    height: 2em;
    color: white;
    text-decoration: none;

    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
}
.link:hover {
    background-color: #cdb9fa;
}
.link.active {
    background-color: #cdb9fa;
}

</style>