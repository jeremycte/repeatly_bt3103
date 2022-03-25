<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
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
        icon:{type: String, required: true}
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

.link{
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;

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
.icon1 {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>