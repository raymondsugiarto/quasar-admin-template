<template>
  <q-layout view="lHh Lpr lff" container style="height: 100vh;" class="shadow-2">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>
          {{ $t(`route.${$route.meta.title}`) }}
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="exit_to_app"
          @click="handleLogout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
    >
      <q-scroll-area
        class="fit"
        style="height: calc(100% - 50px); border-right: 1px solid #ddd"
      >
        <menu-list :routes="routes"/>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <router-view :key="$route.fullPath"/>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { QScrollArea } from 'quasar'
export default {
  name: 'WAdminLayout',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MenuList: () => import('./Navbar/MenuList.vue'),
    QScrollArea
  },
  computed: {
    key () {
      return this.$route.fullPath
    }
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    handleLogout () {
    }
  }
}
</script>

<style scoped lang="scss">
</style>
