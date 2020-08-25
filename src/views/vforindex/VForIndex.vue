<template>
  <div>
    <ul v-for="(item, index) in list" :key="item.name">
      <v-for-index-item @change="changeHandler($event, index)"></v-for-index-item>
    </ul>
  </div>
</template>

<script>
import VForIndexItem from "./VForIndexItem.vue"
export default {
  components: {
    VForIndexItem,
  },
  methods: {
    changeHandler(row, index) {
      console.log("changeHandler -> index", index)
      console.log("changeHandler -> row", row)
    },
  },
  data() {
    return {
      list: [
        {
          name: "zx",
        },
        {
          name: "qq",
        },
      ],
    }
  },
}
</script>
