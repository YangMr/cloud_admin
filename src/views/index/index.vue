<script lang="ts" setup name="Home">
import { getList } from "@/api/test";
import { ref } from "vue";
const handleClick = async () => {
  const res = await getList();
  console.log("res=>", res);
};

const content = ref("");
</script>

<template>
  <div>
    <p v-for="(item, index) in 300">{{ index }}</p>
    <!-- <el-input v-model="content" placeholder="请输入查询内容"></el-input> -->
  </div>
</template>

<style scoped lang="scss"></style>
