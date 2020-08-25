<template>
  <div>
    <h1>虚拟列表转tree结构</h1>
    <h4>{{ tree }}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          pid: -1,
          name: "购物车",
          id: 1,
          auth: "cart",
        },
        {
          pid: 1,
          name: "购物车列表",
          id: 4,
          auth: "cart-list",
        },
        {
          pid: 4,
          name: "彩票",
          id: 5,
          auth: "lottery",
        },
        {
          pid: 4,
          name: "商品",
          id: 6,
          auth: "product",
        },
      ],
    }
  },
  computed: {
    tree() {
      let menu = []
      let menuList = {}
      this.menuList.forEach((item) => {
        item.children = []
        menuList[item.id] = item
        if (item.pid === -1) {
          menu.push(item)
        } else {
          if (menuList[item.pid]) {
            menuList[item.pid].children.push(item)
          }
        }
      })
      return menu
    },
  },
  created() {},
}
</script>
