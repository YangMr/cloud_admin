/**
 * 菜单管理模块接口
 */
import request from "@/utils/request";
import type {
  MenuParamsType,
  ResponseMenuListType,
  ResponseSelectMenuType,
  SearchParamsType,
} from "../types/menuType";

/**
 * 获取菜单列表
 * @param searchParams
 * @returns
 */
export const getMenuList = (searchParams?: SearchParamsType) => {
  return request<ResponseMenuListType[]>(
    "/system/menu/search",
    "POST",
    searchParams
  );
};

/**
 * 删除菜单接口
 * @param id
 * @returns
 */
export const delMenu = (id: number | string) => {
  return request(`/system/menu/${id}`, "DELETE");
};

/**
 * 新增菜单接口
 * @param menuParams
 * @returns
 */
export const addMenu = (menuParams: MenuParamsType) => {
  return request(`/system/menu`, "POST", menuParams);
};

/**
 * 选择菜单接口
 * @returns
 */
export const selectMenu = () => {
  return request<ResponseSelectMenuType>("system/menu/select", "GET");
};

/**
 * 编辑菜单接口
 * @param menuParams
 * @returns
 */
export const editMenu = (menuParams: MenuParamsType) => {
  return request("/system/menu", "PUT", menuParams);
};
