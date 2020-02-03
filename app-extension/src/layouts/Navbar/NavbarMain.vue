<template>
  <q-toolbar class="bg-white q-px-xl q-py-sm">
    <q-btn
      flat round dense
      icon="menu" class="q-mr-sm menu"
      color="primary"
      @click="drawer = !drawer"
    />
    <logo />
    <q-space />
    <q-list>
      <menu-list-item
        v-for="route in routeList"
        :key="route.path"
        :item="route"
      />
    </q-list>
    <!-- <nav-drawer :drawer="drawer"/> -->
  </q-toolbar>
</template>

<script>
import routes from '@/router/routes'

export default {
  name: 'NavbarMain',
  components: {
    Logo: () => import('@/components/OnlineStore/Logo.vue'),
    MenuListItem: () => import('./MenuListItem.vue')
  },
  computed: {
    routeList () {
      return routes
    }
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped lang="scss">
@media (min-width: $breakpoint-sm-max) {
  .menu {
    display: none;
  }
}
@media (max-width: $breakpoint-sm-max) {
  .q-toolbar {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
