<template>
  <div>
    <Header></Header>
    <main class="section main">
      <div class="columns">
        <article class="column is-three-fifths article">
          <slot></slot>
        </article>
        <nav class="column articlenav is-one-fifths is-hidden-touch">
          <slot name="articlenav"></slot>
        </nav>
        <nav class="column docsnav is-one-fifths is-hidden-touch">
          <slot name="docsnav"></slot>
        </nav>
      </div>
    </main>
    <footer class="footer is-hidden-desktop" v-if="this.$slots.docsnav">
      <slot name="docsnav"></slot>
    </footer>
  </div>
</template>

<style>
:root {
  --nav-sticky-top-position: 89px;
}

/* Fix prismjs vs bulma making some numbers very big:
https://github.com/jgthms/bulma/issues/1708#issuecomment-382560341 */
.content .tag,
.content .number {
  display: inline;
  padding: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;
  vertical-align: inherit;
  border-radius: inherit;
  font-weight: inherit;
  white-space: inherit;
  background: inherit;
  margin: inherit;
}

.content h1 a {
  display: none;
}

/* hack to make header links work with sticky nav in desktop mode */
@media screen and (min-width: 1024px) {
  #content h2,
  #content h3,
  #content h4,
  #content h5,
  #content h6 {
    padding-top: 85px;
    margin-top: -49px;
  }
}
</style>
<style scoped>
.docsnav {
  order: -1;
  position: sticky;
  top: var(--nav-sticky-top-position);
  align-self: flex-start;
}

.docsnav a.active {
  font-weight: bolder;
}

.footer a.active {
  font-weight: bolder;
}

.articlenav {
  position: sticky;
  top: var(--nav-sticky-top-position);
  align-self: flex-start;
}

.main {
  max-width: 1550px;
  margin: 0 auto;
}

/* make it use all the width on tablet (`is-three-fifths` class is messing it up) */
@media screen and (max-width: 1023px) {
  .article {
    width: 100%;
  }
}
</style>
