<template>
  <div>
    <template v-for="(item, index) in data">
      <slot :item="item" :index="index"></slot>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
    },
    render: {
      type: Function,
    },
  },
}
</script>
