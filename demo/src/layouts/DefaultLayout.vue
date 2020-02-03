<template>
  <w-admin-layout :routes="routes"/>
</template>

<script>
import { dynamicRoutes } from '@/router/routes'

export default {
  name: 'DefaultLayout',
  computed: {
    routes () {
      return dynamicRoutes
    }
  }
}
</script>
