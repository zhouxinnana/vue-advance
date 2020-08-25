<template>
  <div>
    <h1>slot的具体用法</h1>
    <c-card>
      <h1>content</h1>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <template v-slot:footer="{ row }">
        <h1>Here might be a page title {{ row }}</h1>
      </template>
    </c-card>
  </div>
</template>

<script>
import CCard from "./c-card.vue"
export default {
  data() {
    return {}
  },
  components: {
    CCard,
  },
}
</script>
