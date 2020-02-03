<template>
  <div
    v-if="!item.meta || !item.meta.hidden"
  >
    <template
      v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children"
    >
      <q-item
        clickable
        v-ripple
        :to="resolvePath(theOnlyOneChild)"
      >
        <q-item-section>
          {{ $t(`route.${theOnlyOneChild.meta.title}`) }}
        </q-item-section>
      </q-item>
    </template>
    <template
      v-else-if="!alwaysShowRootMenu && item.children"
    >
      <menu-list-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child)"
        class="nest-menu"
      />
    </template>
    <q-expansion-item
      v-else
      expand-separator
      :icon="item.icon ? item.icon : ''"
      :label="item.meta && item.meta.title ? $t(`route.${item.meta.title}`) : ''"
    >
      <template v-if="item.children">
        <menu-list-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child)"
          class="nest-menu"
        />
      </template>
    </q-expansion-item>
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'MenuListItem',
  props: {
    item: { required: true },
    basePath: { default: '' }
  },
  components: {
    MenuListItem: () => import('../Navbar/MenuListItem.vue')
  },
  computed: {
    alwaysShowRootMenu () {
      if (this.item.meta && this.item.meta.alwaysShow) {
        return true
      }
      return false
    },
    activeChilds () {
      if (this.item.children) {
        const showingChildren = this.item.children.filter((item, index) => {
          if (item.meta && item.meta.hidden) {
            if (item.children) {
              item.children.splice(index, 1)
            }
            return false
          } else {
            return true
          }
        })
        return showingChildren
      }
      return []
    },
    theOnlyOneChild () {
      const activeChilds = this.activeChilds
      if (activeChilds.length > 1) {
        return null
      }
      if (this.item.children) {
        for (let child of this.item.children) {
          if (!child.meta || !child.meta.hidden) {
            return child
          }
        }
      }
      return this.item
    }
  },
  methods: {
    resolvePath (child) {
      let routePath = child.path
      if (child.alias) {
        routePath = child.alias
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
