<template>
  <section>
    <h5>
      I am a product-minded <strong>frontend software engineer</strong> seeking a senior frontend role. Former
      designer
      turned developer who loves good UI/UX, clean architecture and VueJS.
    </h5>
    <div>
      <ButtonComponent variant="primary">Email<i class="bi bi-envelope pl-m"></i></ButtonComponent>
      <ButtonComponent variant="outline">Let's Connect<i class="bi bi-linkedin pl-m"></i></ButtonComponent>
    </div>
  </section>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'Hero',
  components: {
    ButtonComponent
  }
}
</script>

<style scoped lang="scss">
section {
  width: 75%;
}
</style>
