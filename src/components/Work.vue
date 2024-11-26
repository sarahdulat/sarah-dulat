<template>
  <section class="pt-xl">
    <h2>Selected Work</h2>
    <img src="" alt="" width="100%" height="400px">
    <div class="pb-xl">
      <h3>The Skin Routine</h3>
      <a href="#">See Figma Designs</a>
      <p>The Skin Routine is a blog and skincare recommendation website to help people find products for their daily
        skin
        routines. The D3 chart on the homepage helps to visualize the variety or routines by their cost and time
        investments. Each product has a review with links to purchase the products. This was built in Vue and Typescript
        and D3.</p>
    </div>
    <div class="pb-xl">
      <img src="" alt="" width="100%" height="400px">
      <h3>Jest Halny?</h3>
      <a href="https://jest-halny.vercel.app/">See it live</a>
      <p>Jest Halny (Is it Halny?) is a web tool to help the locals of the Tatry mountains to check if the Halny winds
        are
        currently blowing. The Halny winds are destructive and confirming them is very helpful for the tourists and
        locals. This app was built with React, Typescript and Tailwind.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Work'
}
</script>

<style scoped lang="scss">
h2 {
  font-size: var(--fontSize-l);
  line-height: var(--lineHeight-l);
  letter-spacing: var(--letterSpacing-l);
  font-weight: 300;
}

h3 {
  font-size: var(--fontSize-m);
  line-height: var(--lineHeight-m);
  letter-spacing: var(--letterSpacing-m);
  font-weight: 300;
  margin-bottom: var(--space-sm);
}

p {
  margin-right: 25%;
}

img {
  background-color: lightgrey;
}
</style>
