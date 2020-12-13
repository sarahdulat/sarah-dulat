<template>
    <div
        id="footer"
        class="sherbert">
        <p>
			<span>© {{ currentYear }} Sarah Dulat</span>
            <a href="https://github.com/sarahdulat" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/sarahdulat/" target="_blank">LinkedIn</a> | <a href="https://twitter.com/sarahdulat" target="_blank">Twitter</a>
        </p>
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
