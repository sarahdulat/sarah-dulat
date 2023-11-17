<template>
    <section class="sherbert">
        <div class="row">
            <span>© {{ currentYear }} Sarah Dulat</span>
            <div class="social">
                <a href="https://github.com/sarahdulat" target="_blank">GitHub</a> | <a
                    href="https://www.linkedin.com/in/sarahdulat/" target="_blank">LinkedIn</a> | <a
                    href="https://twitter.com/sarahdulat" target="_blank">Twitter</a>
            </div>
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
    .row {
        justify-content: space-between;
    }

    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    overflow: visible;
    z-index: 99;
    padding: 10px 15px 0;
    background-color: #F16544;
    height: 40px;

    .social,
    span,
    a {
        color: #FFFFFF;
        font-size: 12px;
        text-decoration: none;
    }

    a:hover {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
    }
}</style>
