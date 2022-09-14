<template>
  <div>
    <button @click="add">start add</button>
    <button @click="stop">stop add</button>
  </div>
  <MyTable :data="data" :num="num">
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
</template>

<script lang="ts" setup>
import { MyTable } from '@/components/test'
import { ref, h, reactive, cloneVNode, unref } from 'vue'
import { TableV2SortOrder } from 'element-plus'
const num = reactive({
  key: 'id',
  order: 1
});
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

let data = ref(generateData(columns, 100))

let timer = null;
let index = 101;
const add = () => {
  timer = setInterval(() => {
    data.value.unshift({
        id: index,
        name: `name${index}`,
        other: `other${index}`,
        parentId: null
    })
    index++;
  }, 100)
}
const stop = () => {
  clearInterval(timer)
}

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
