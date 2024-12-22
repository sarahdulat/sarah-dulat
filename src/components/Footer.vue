<template>
    <footer class="px-l py-m">
        <span class="name">Sarah Dulat-Boussaid</span>
        <div class="row">
            <div class="column">
                <p class="mt-0">Colophon</p> <span>Built in VueJS. Header font is <a href="">Bebas Neue</a>. Body font
                    is <a href="">Roboto</a>.</span>
            </div>
            <div class="column"></div>
            <div class="column">
                <a href="">Blog</a>
                <a href="">Resume</a>
                <Tooltip position="top" @hideTooltip="tooltipContent = 'Click to Copy'">
                    <template #trigger>
                        <span class="email" @click="copy()">sarah@sarahdulat.com</span>
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
    height: 400px;
    color: var(--color-light);
    font-weight: 500;
    padding-bottom: 40px;

    .name {
        font-size: clamp(var(--fontSize-xl), 10vw, 200px);
        color: var(--color-primary);
        font-family: var(--font-family-header);
    }

    .email {
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>
