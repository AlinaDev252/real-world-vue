<template>
  <h1>Showing Event {{ event.title }}</h1>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: {},
    }
  },
  created() {
    EventService.getEvent(this.id) // <--- Send the prop id to our EventService
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log('There was an error:', error.response)
      })
  },
}
</script>
