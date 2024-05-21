<script lang="ts" setup>
defineProps<{
  // 表格的数据
  data: any[];
  // 渲染的列数据
  column: any[];
}>();
</script>

<template>
  <el-table :data="data" border style="width: 100%">
    <!-- 非操作项 -->
    <template v-for="(item, index) in column">
      <template v-if="!item.slot">
        <el-table-column
          v-if="!item.type"
          :prop="item.prop"
          :label="item.label"
          :align="item.align"
          width="180"
        />
      </template>
      <template v-else-if="item.slot">
        <el-table-column
          :align="item.align"
          v-if="!item.type"
          :prop="item.prop"
          :label="item.label"
          :width="item.width || ''"
        >
          <template #default="scope">
            <slot :name="item.slot" :scope="scope"></slot>
          </template>
        </el-table-column>
      </template>

      <!-- 操作项 -->
      <el-table-column
        :align="item.align"
        :label="item.label"
        v-if="item.type === 'action'"
      >
        <template #default="scope">
          <slot :name="item.slot || 'action'" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<style scoped lang="scss"></style>
