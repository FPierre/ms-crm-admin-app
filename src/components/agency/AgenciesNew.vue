<template>
  <div class="agency-create-component">
    <h1>Create agency</h1>

    <input type='text' placeholder='name' v-model='name'>
    <button @click.prevent='create'>Create</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null
    }
  },
  methods: {
    create () {
      this.$store.dispatch('create', { name: this.name })
    }
  }
}
</script>
