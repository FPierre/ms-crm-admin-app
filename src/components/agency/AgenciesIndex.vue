<template>
  <div class='agencies-index-component'>
    <div class='container'>
      <div class='S12'>
        <ul class='collection'>
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
// import Agency from '@/components/agency/Agency'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['agencies']),
  created () {
    this.$store.dispatch('index')
  }
  // components: {
  //   Agency
  // }
}
</script>
