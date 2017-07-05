<template>
  <div class='agency-new-component'>
    <div class='columns'>
      <div class='column'>
        <input type='file' id='file-input'>
        <p id='status'>Please select a file</p>
        <img id='preview' src='/images/default.png'>

        <div class='field'>
          <label class='label'>Name</label>
          <p class='control'>
            <input type='text' class='input' placeholder='Account name'>
          </p>
        </div>

        <div class='field'>
          <label class='label'>Activities</label>
          <p class='control'>
            <span class='select'>
              <select>
                <option>French fries stand</option>
                <option>Candy floss stand</option>
              </select>
            </span>
          </p>
        </div>

        <div class='field'>
          <label class='label'>Responsible</label>
          <p class='control'>
            <span class='select'>
              <select>
                <option>User 1</option>
                <option>User 2</option>
              </select>
            </span>
          </p>
        </div>

        <div class='field is-grouped'>
          <p class='control'>
            <button class='button is-primary'>Submit</button>
          </p>

          <p class='control'>
            <button class='button is-link'>Cancel</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      status: null,
      activities: [],
      responsibleId: null
    }
  },
  methods: {
    create () {
      this.$store.dispatch('create', { name: this.name })
    }
  }
}
</script>
