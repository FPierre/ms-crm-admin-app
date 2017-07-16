<template>
  <div class='pagination-component'>
    <nav class='pagination'>
      <a class='pagination-previous' :disabled='isFirstPage' @©lick='navigate(1)'>Previous</a>
      <a class='pagination-next' :disabled='isLastPage' @click='navigate(pages)'>Next page</a>

      <ul class='pagination-list'>
        <li>
          <a class='pagination-link' :class="{ 'is-current': isFirstPage }" @click='navigate(1)'>1</a>
        </li>
        <li v-if='displayMiddle'>
          <a class='pagination-link' @click='navigate(middlePage)'>{{ middlePage }}</a>
        </li>
        <li>
          <a class='pagination-link' :class="{ 'is-current': isLastPage }" @click='navigate(pages)'>{{ pages }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['page', 'pages'],
  computed: {
    isFirstPage () {
      return this.page === 1
    },
    isLastPage () {
      return this.page === this.pages
    },
    displayMiddle () {
      return this.page >= 3
    },
    middlePage () {
      return this.pages / 2
    }
  },
  methods: {
    navigate (newPage) {
      this.$emit('navigate', newPage)
    }
  }
}
</script>
