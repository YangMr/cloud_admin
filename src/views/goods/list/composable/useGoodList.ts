import { ref } from "vue";
import type { Record } from "@/api/types/goodListType";
import { changeGoodStatus, delGood, getGoodList } from "@/api/goods/goodList";
import { ElNotification } from "element-plus";

export const useGoodList = () => {
  const current = ref<number>(1);
  const size = ref<number>(1);
  const total = ref<number>(0);
  const searchForm = ref<{
    keyword: string;
    status: number | string;
  }>({
    keyword: "",
    status: "",
  });
  const goodList = ref<Record[]>();

  const handleSearch = () => {
    initGoodList();
  };

  const initGoodList = async () => {
    try {
      const res = await getGoodList({
        current: current.value,
        size: size.value,
        keyword: searchForm.value.keyword,
        status: searchForm.value.status as number,
      });

      goodList.value = res.data.records;
      total.value = res.data.total;
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (row: Record) => {
    try {
      await changeGoodStatus({
        id: row.id,
        status: row.status,
      });

      ElNotification({
        title: "状态更新成功",
        type: "success",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSizeChange = (value: number) => {
    size.value = value;
    initGoodList();
  };

  const handleCurrentChange = (value: number) => {
    current.value = value;
    initGoodList();
  };

  const handleDelete = async (id: number) => {
    try {
      await delGood(id);

      ElNotification({
        title: "操作成功!",
        type: "success",
      });

      initGoodList();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    current,
    size,
    total,
    searchForm,
    goodList,
    initGoodList,
    changeStatus,
    handleSizeChange,
    handleCurrentChange,
    handleDelete,
    handleSearch,
  };
};
