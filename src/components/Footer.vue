<template>
    <footer class="px-l py-m">
        <div class="row">
            <small>© {{ currentYear }} Sarah Dulat-Boussaid</small>
            <small>
                <a href="https://github.com/sarahdulat" target="_blank">GitHub</a> | <a
                    href="https://www.linkedin.com/in/sarahdulat/" target="_blank">LinkedIn</a> </small>
        </div>
    </footer>
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
footer {
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
