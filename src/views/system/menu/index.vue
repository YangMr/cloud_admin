<script lang="ts" setup>
import { ref } from "vue";
import type { ResponseMenuListType } from "@/api/types/menuType";
import { getMenuList } from "@/api/system/menu";
// 保存后台返回的菜单列表数据
const menuList = ref<ResponseMenuListType[]>([]);

// 菜单查询的参数
const searchFormKey = ref({
  keyword: "",
});

// 获取菜单列表
const initMenuList = async () => {
  try {
    const res = await getMenuList(searchFormKey.value);
    console.log("res", res);
    menuList.value = res.data;
  } catch (e) {
    console.log(e);
  }
};
// 调用菜单列表方法
initMenuList();

// 过滤图表的ele-
const filterMenuIcon = (icon: string) => {
  if (icon) {
    return icon.replace("ele-", "");
  }
};
</script>

<template>
  <div class="layout-padding">
    <!-- 菜单列表 -->
    <el-table
      :data="menuList"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <el-table-column align="center" label="菜单名称">
        <template #default="{ row }">
          <svg-icon
            v-if="filterMenuIcon(row.meta.icon)"
            :icon="filterMenuIcon(row.meta.icon)"
          ></svg-icon>
          <span style="margin-left: 10px">{{ row.meta.title }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="path" label="路由地址" />
      <el-table-column align="center" prop="component" label="组件路径">
      </el-table-column>
      <el-table-column align="center" prop="code" label="权限标识">
      </el-table-column>
      <el-table-column align="center" label="类型">
        <template #default="{ row }">
          <!-- <el-tag :type="row.type == 1 ? 'primary' : 'success'">{{
            row.type == 1 ? "菜单" : "按钮"
          }}</el-tag> -->
          <el-tag v-if="row.type == 1" type="primary">菜单</el-tag>
          <el-tag v-if="row.type == 2" type="success">按钮</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="sort" label="排序" />
      <el-table-column align="center" label="操作" width="240">
        <template #default="scope">
          <el-button type="primary" icon="Plus" link size="small">
            新增下级
          </el-button>
          <el-button type="warning" icon="Edit" link size="small">
            修改
          </el-button>
          <el-button type="danger" icon="delete" link size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang="scss"></style>
