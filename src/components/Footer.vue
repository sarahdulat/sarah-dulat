<template>
    <section class="sherbert px-l py-m">
        <div class="row">
            <small>© {{ currentYear }} Sarah Dulat</small>
            <small>
                <a href="https://github.com/sarahdulat" target="_blank">GitHub</a> | <a
                    href="https://www.linkedin.com/in/sarahdulat/" target="_blank">LinkedIn</a> | <a
                    href="https://twitter.com/sarahdulat" target="_blank">Twitter</a>
            </small>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>

<style scoped lang="scss">
section {
    // position: fixed;
    // bottom: 0px;
    // left: 0px;
    width: 100%;
    overflow: visible;
    // z-index: 99;
    background-color: var(--color-primary);
    height: 40px;

    .row {
        justify-content: space-between;
    }
}

a,
small {
    color: var(--color-white);

    &:hover {
        color: var(--color-white-hover);
    }
}
</style>
