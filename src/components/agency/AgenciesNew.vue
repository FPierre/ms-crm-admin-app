<template>
  <div class="agency-new-component">
    <div class='modal-content'>
     <h4>Modal Header</h4>
    </div>

    <div class='modal-footer'>
      <input type='text' placeholder='name' v-model='name'>
      <a href='#!' class='modal-action modal-close waves-effect waves-green btn-flat' @click='create'>Create</a>
    </div>
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
