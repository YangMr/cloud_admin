import request from "@/utils/request";
import type {
  CategoryParamsType,
  ResponseCategoryListType,
  ResponseCateogrySearchListType,
} from "../types/goodCategoryType";

/**
 * 获取商品分类列表
 * @returns
 */
export const getCategoryList = () => {
  return request<ResponseCategoryListType[]>("/goods/category/list", "GET");
};

/**
 * 获取商品分类查询列表
 * @param categoryParams
 * @returns
 */
export const getCategorSearchList = (categoryParams: CategoryParamsType) => {
  return request<ResponseCateogrySearchListType>(
    "/goods/category/search",
    "POST",
    categoryParams
  );
};
