<template>
  <div class='timeline-component'>
    <div class='timeline' v-if='events'>
      <div class='event' v-for='{ event, date, user } in events'>
        <h1>{{ event }}</h1>
        <h2>{{ date }}</h2>
        <small>{{ userFullName }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['events']
}
</script>

[
  {
    event: 'Event 1',
    date: Date.now,
    userFullName: ''
  }
]
