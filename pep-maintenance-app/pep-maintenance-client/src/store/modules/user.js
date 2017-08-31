const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

// initial state
// shape: [{ id, quantity }]
const state = {
  isLoggedIn: false,
  user: {
    apps: ['/login']
  }
}

// getters
const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn
  },
  canAccessApp: (state, getters) => (appPath) => {
    return state.user.apps.includes(appPath)
  },
  requireAuth: (state, getters) => (to, from, next) => {
    if (!state.isLoggedIn || !state.user.apps.includes(to.path)) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
}

// actions
const actions = {
  login ({ commit }, creds) {
    commit(LOGIN) // show spinner
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem('token', 'NEEDSVALUE')
        commit(LOGIN_SUCCESS, creds)
        resolve()
      }, 1000)
    })
  },
  logout ({ commit }) {
    localStorage.removeItem('token')
    commit(LOGOUT)
  }
}

// mutations
const mutations = {
  [LOGIN] (state) {
    state.pending = true
  },
  [LOGIN_SUCCESS] (state, creds) {
    state.isLoggedIn = true
    state.pending = false

    let allowedApps = []
    if (creds.username === 'limited.user') {
      allowedApps = ['/admin/comm-dev', '/admin/logo-preview']
    } else {
      allowedApps = ['/admin/account-type', '/admin/applix', '/admin/prenote', '/admin/change-order', '/admin/comm-dev', '/admin/contracts', '/admin/cust-prod', '/admin/logo-preview', '/admin/logo32', '/admin/message-management', '/admin/pre-auth', '/admin/price32', '/admin/price-list', '/admin/ship32', '/admin/special-bill', '/admin/win-branch', '/admin/win-check', '/admin/win-prod', '/admin/icons', '/admin/stats', '/admin/table-list', '/admin/typography', '/admin/icons', '/admin/maps', '/admin/notifications']
    }
    allowedApps.unshift('/admin/overview')

    state.user = {username: creds.username, apps: allowedApps}
  },
  [LOGOUT] (state) {
    state.isLoggedIn = false
    state.user = {apps: ['/login']}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
