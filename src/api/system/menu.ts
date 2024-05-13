/**
 * 菜单管理模块接口
 */
import request from "@/utils/request";
import type { ResponseMenuListType, SearchParamsType } from "../types/menuType";

export const getMenuList = (searchParams?: SearchParamsType) => {
  return request<ResponseMenuListType[]>(
    "/system/menu/search",
    "POST",
    searchParams
  );
};
