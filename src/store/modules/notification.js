export const namespaced = true

export const state = {
  notifications: [],
}

let nextId = 1

export const mutations = {
  PUSH(state, notification) {
    state.notification.push({
      ...notification,
      // assures that the Id is unique
      id: nextId++,
    })
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      (notification) => notification.id !== notificationToRemove.id
    )
  },
}

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  },
}
