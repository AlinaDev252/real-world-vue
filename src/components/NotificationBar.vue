<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  // Computed property added so that I can style the success and error notifications differently
  // This will return ‘-text-success’ or ‘-text-error’ depending upon the type that is on our notification
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`
    },
  },
}
</script>

<style lang="scss" scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
