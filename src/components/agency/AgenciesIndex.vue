<template>
  <div class='agencies-index-component'>
    <div class='container'>
      <div class='s12'>
        <ul class='collection' v-if='agencies.length'>
          <li class='collection-item avatar' v-for='{ name } in agencies'>
            <img src='images/yuna.jpg' alt='' class='circle'>
            <span class='title'>{{ name }}</span>
            <a href='#!' class='secondary-content'><i class='material-icons'>grade</i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['agencies']),
  created () {
    this.$store.dispatch('index')
  }
}
</script>
