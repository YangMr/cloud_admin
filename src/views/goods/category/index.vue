<script lang="ts" setup>
import { ref } from "vue";
import BaseTable from "@/components/BaseTable.vue";
import { getCategorSearchList } from "@/api/goods/goodCategory";
import type { Record } from "@/api/types/goodCategoryType";

const categoryList = ref<Record[]>([]);
const columnOptions = [
  {
    label: "分类名称",
    prop: "name",
    align: "center",
  },
  {
    label: "分类状态",
    slot: "status",
    prop: "status",
    align: "center",
  },
  {
    label: "排序号",
    prop: "sort",
    align: "center",
  },
  {
    label: "备注信息",
    prop: "remark",
    align: "center",
  },
  {
    label: "操作",
    type: "action",
    align: "center",
  },
];

const current = ref(1);
const size = ref(10);
const searchForm = ref({
  name: "",
});
const total = ref(0);

const initCategoryList = async () => {
  try {
    const res = await getCategorSearchList({
      current: current.value,
      size: size.value,
      name: searchForm.value.name,
    });
    total.value = res.data.total;
    categoryList.value = res.data.records;
    console.log("Resss=>", res);
  } catch (error) {
    console.log(error);
  }
};
initCategoryList();
</script>
<template>
  <BaseTable :data="categoryList" :column="columnOptions">
    <template #status="{ scope }">
      <el-tag :type="scope.row.status ? 'success' : 'danger'">{{
        scope.row.status ? "启用" : "停用"
      }}</el-tag>
    </template>
    <template #action="{ scope }">
      <el-button link type="warning">修改</el-button>
      <el-button link type="danger">删除</el-button>
    </template>
  </BaseTable>
</template>

<style scoped lang="scss"></style>
