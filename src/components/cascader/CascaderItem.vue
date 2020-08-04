<template>
  <div class="content">
    <div class="left-waper">
      <div
        class="cascader-item"
        v-for="(item,index) in options"
        :key="index"
        @click="select(item)"
      >{{item.label}}</div>
    </div>
    <div class="right-waper" v-if="lists && lists.length">
      <!-- <div class="cascader-item" v-for="(item,index) in lists" :key="index" @click="select(item)">{{item.label}}</div> -->
      <CascaderItem :options="lists" :level="level+1" @change="change" :value="value"></CascaderItem>
    </div>
  </div>
</template>
<script>
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "CascaderItem",
  props: {
    level: {
      type: Number
    },
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      currentSeected: null
    };
  },

  computed: {
    lists() {
      // if (this.value[this.level] && this.value[this.level].id) {
      //   let o = this.options.find(item => item.id == this.value[this.level].id);
      //   return o.children;
      // }

       if(this.value[this.level] && this.value[this.level].id){
        let o = this.options.find(item=>item.id === this.value[this.level].id);
         return  o.children
        }else{
          return []
        }
    }
  },

  methods: {
    select(item) {
      this.currentSeected = item;
      let cloneValue = cloneDeep(this.value);
      cloneValue[this.level] = item;
      cloneValue.splice(this.level + 1);
      this.$emit("change", cloneValue);
    },
    change(item) {
      this.$emit("change", item);
    }
  }
};
</script>
<style lang="less">
.content {
  display: flex;
  .left-waper {
    border: 1px solid #ccc;
    min-height: 150px;
    max-height: 200px;
    overflow-y: scroll;
  }

  .cascader-item {
    font-size: 16px;
    cursor: pointer;
    padding: 0 10px 0 10px;
    &:hover {
      background: #ccc;
    }
  }
}
</style>