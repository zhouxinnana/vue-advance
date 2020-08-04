<template>
  <div>
    <div>
      <h1>jsx语法的简单操作</h1>
      <level :t="1">1</level>
      <level :t="2">2</level>
    </div>

    <div>
      <h1>jsx语法的组件</h1>
      <List :data="['香蕉','苹果','橘子']" :render="render"></List>
    </div>
    <div>
      <h1>插槽的组件</h1>
      <List1 :data="['香蕉','苹果','橘子']">
        <template v-slot="{ item, index} ">
          <h4>{{index}} {{item}}</h4>
        </template>
      </List1>
    </div>
    <div>
      <h1>jsx在iview中的应用</h1>
      <Table :columns="columns" :data="data"></Table>
    </div>
  </div>
</template>
<script>
import level from "@/components/jsx/levelFunctions.js";
import List from "@/components/jsx/List.vue";
import List1 from "@/components/jsx/List1.vue";
export default {
  components: {
    level,
    List,
    List1
  },
  data() {
    return {
      columns: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age",
          render: this.tableRender
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        }
      ],
      currentIndex: -1
    };
  },
  methods: {
    render(h, data) {
      return <span>{data}</span>;
    },

    handlerChangeIndex(e, { index }) {
      this.currentIndex = index;
      this.$nextTick(()=>{
        e.currentTarget.getElementsByTagName('input')[0].focus()
      })
    },

    handlerChange(value, { row, column }){
      row[column.key] = value
    },

    handerEnter({ row, index }){
      this.currentIndex = -1
      this.data.splice(index,1,row)
      
    },

    tableRender(h, { row, column, index }) {
      return (
        <div
          on-click={e => {
            this.handlerChangeIndex(e, { row, column, index });
          }}
        >
          {this.currentIndex == index ? (
            <i-input onOn-enter={()=>{this.handerEnter({ row, column, index })}} value={row[column.key]} on-input={(value)=>{this.handlerChange(value, { row, column, index })}}></i-input>
          ) : (
            <span>{row[column.key]}</span>
          )}
        </div>
      );
    }
  }
};
</script>