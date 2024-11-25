<template>
    <footer class="px-l py-m">
        <div class="row">
            <small>© {{ currentYear }} Sarah Dulat-Boussaid</small>
            <small>Based in Basel, Switzerland. <i class="bi bi-globe"></i> Available globally.</small>
            <small v-html="getAvailability"></small>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
            availability: 0
        }
    },
    computed: {
        getAvailability() {
            if (this.availability == 1) {
                return '<i class="bi bi-circle-fill"></i> Available for new projects.'
            } else if (this.availability == 0.5) {
                return '<i class="bi bi-circle-half"></i> Limited availability, email for more info.'
            } else if (this.availability == 0) {
                return '<i class="bi bi-slash-circle"></i> Not currently available for new projects, <a href="#">join the waitlist</a>.'
            }
        }
    }
}
</script>

<style scoped lang="scss">
footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    overflow: visible;
    z-index: 99;
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
