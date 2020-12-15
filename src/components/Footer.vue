<template>
    <div
        id="footer"
        class="sherbert">
        <div class="row">
			<span>© {{ currentYear }} Sarah Dulat</span>
            <div class="social">
                <a href="https://github.com/sarahdulat" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/sarahdulat/" target="_blank">LinkedIn</a> | <a href="https://twitter.com/sarahdulat" target="_blank">Twitter</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>
