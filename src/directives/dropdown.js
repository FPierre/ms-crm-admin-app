import Vue from 'vue'

Vue.directive('dropdown-click', {
  bind: el => {
    el.addEventListener('click', () => {
      if (el.classList.contains('is-active')) {
        el.classList.add('is-active')
      } else {
        el.classList.remove('is-active')
      }
    }, true)

    window.addEventListener('click', () => {
      // if (el.classList.contains('is-active')) {
      el.classList.remove('is-active')
      // }
    }, true)
  }
})
