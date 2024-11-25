<template>
  <main>
    <section>
      <h5>
        As a designer/developer hybrid with over a decade of experience in startups and scaleups, I specialize in
        bridging
        the gap between design and development. My expertise lies in owning the full lifecycle of design systems and
        beyond, ensuring seamless integration and execution.
      </h5>
      <div>
        <Tooltip position="top" @hideTooltip="tooltipContent = 'Click to Copy'">
          <template #trigger>
            <Button variant="primary" @click="copy()">Email<i class="bi bi-envelope pl-m"></i></Button>
          </template>
          <template #content>
            {{ tooltipContent }}
          </template>
        </Tooltip>
        <a href="https://www.linkedin.com/in/sarahdulat/" target="_blank">
          <Button variant="outline">Let's Connect<i class="bi bi-linkedin pl-m"></i></Button>
        </a>
      </div>
    </section>
    <section>
      <h5 class="font-bebas">Selected Work</h5>
      <img src="" alt="" width="100%" height="600px">
    </section>
  </main>
</template>

<script>
import Button from './Button.vue';
import Tooltip from './Tooltip.vue';

export default {
  name: 'Hero',
  components: {
    Button,
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
main {
  margin: 0 15%;
  padding-bottom: 40px;
}

img {
  background-color: lightgrey;
}

h5 {
  margin-right: 25%;
}
</style>
