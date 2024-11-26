<template>
    <footer class="px-l py-m row">
        <!-- <div class="column">Sarah Dulat-Boussaid is a Design Engineer living and working in Basel, Switzerland.</div>
        <div class="column"></div> -->
        <div class="column">
            <a href="">Blog</a>
            <a href="">Resume</a>
            <Tooltip position="top" @hideTooltip="tooltipContent = 'Click to Copy'">
                <template #trigger>
                    <span @click="copy()">sarah@sarahdulat.com</span>
                </template>
                <template #content>
                    {{ tooltipContent }}
                </template>
            </Tooltip>
        </div>
        <div class="column">
            <a href="" target="_blank">BlueSky</a>
            <a href="" target="_blank">GitHub</a>
            <a href="" target="_blank">LinkedIn</a>
        </div>
    </footer>
</template>

<script>
import Tooltip from './Tooltip.vue';

export default {
    name: 'Footer',
    components: {
        Tooltip
    },
    data() {
        return {
            tooltipContent: 'Click to Copy'
        }
    },
    methods: {
        copy() {
            navigator.clipboard.writeText("sarah@sarahdulat.com");
            this.tooltipContent = 'Copied!'
        }
    }
}
</script>

<style scoped lang="scss">
footer {
    width: 100%;
    background-color: var(--color-dark);
    height: 200px;
    color: var(--color-light);
    font-weight: 500;

    span {
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>
