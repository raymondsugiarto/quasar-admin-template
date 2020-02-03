<template>
  <q-list>
    <menu-list-item
      v-for="route in routeList"
      :key="route.path"
      :item="route"
    />
  </q-list>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MenuListItem: () => import('./MenuListItem.vue')
  },
  computed: {
    routeList () {
      return this.routes
    }
  }
}
</script>
