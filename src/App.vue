<template>
  <MyTable>
    <template #header>
      <div>header</div>
    </template>
    <template #footer>
      <div>footer</div>
    </template>
  </MyTable>
  <el-table-v2
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    v-model:sort-state="sortState"
    @column-sort="onSort"
    fixed
  >
  </el-table-v2>
    <!-- <el-table-v2
        :columns="columns"
        :data="data"
        :width="700"
        :height="400"
        :sort-by="sortState"
        @column-sort="onSort"
        fixed
        >
</el-table-v2> -->
</template>

<script lang="ts" setup>
import { MyTable } from '@/components/test'
import { ref, h, reactive, cloneVNode } from 'vue'
import { TableV2SortOrder } from 'element-plus'
const generateData = (
  columns,
  length = 200,
) =>
  Array.from({ length }).map((_, index) => {
    return {
      id: index,
      name: `name${index}`,
      other: `other${index}`,
      parentId: null
    }
  })
const columns = [
  {
    key: 'id',
    dataKey: 'id',
    title: 'id',
    width: 200,
    maxWidth: '400',
  },
  {
    key: 'name',
    dataKey: 'name',
    title: 'name',
    width: 200,
  },
  {
    key: 'other',
    dataKey: 'other',
    title: 'other',
    width: 200,
  },
]
  // let data = generateData(columns, 100)
  // //设置排序
  // columns[0].sortable = true
  // const sortState = ref({
  //   key: 'id',
  //   order: TableV2SortOrder.ASC,
  // })
  
  // const onSort = (sortBy) => {
  //   console.log(sortBy)
  //   data = data.reverse()
  //   sortState.value = sortBy
  // }

let data = ref(generateData(columns, 100))
columns[0].sortable = true;
columns[1].sortable = true;
const sortState = ref({
  'id': TableV2SortOrder.DESC,
  'name': TableV2SortOrder.ASC,
})
const onSort = ({ key, order }: SortBy) => {
  sortState.value[key] = order
  data.value = data.value.reverse()
}

// let data = generateData(columns, 100)
// columns[0].sortable = true;
// columns[1].sortable = true;
// const sortState = ref({
//   'id': TableV2SortOrder.DESC,
//   'name': TableV2SortOrder.ASC,
// })
// const onSort = ({ key, order }: SortBy) => {
//   sortState.value[key] = order;
//   console.log("onSort")
//   data = [];
//   console.log(data)
// }
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
