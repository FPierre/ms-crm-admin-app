<template>
  <div class='agencies-search-component'>
    <div class='columns'>
      <div class='column is-one-quarter'>
        <div class='field'>
          <label class='label'>Name</label>

          <p class='control'>
            <input type='text' class='input' placeholder='Text input'>
          </p>
        </div>
      </div>

      <div class='column'>
        <gmap-map :center='center' :zoom='6' style='height: 300px' :options='options'></gmap-map>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {},
      center: { lat: 0, lng: 0 }
    }
  }
}
</script>
