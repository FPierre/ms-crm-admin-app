<template>
  <div class='logs-component'>
    <div class='container'>
      <div class='s12'>
        <ul class='collection' v-if='logs.length'>
          <li class='collection-item' v-for='{ event, createdAt } in logs'>
            {{ event }} {{ createdAt }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['logs']),
  created () {
    this.$store.dispatch('update')
  }
}
</script>
