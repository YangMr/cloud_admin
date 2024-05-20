import request from "@/utils/request";
import type {
  GoodListParamsType,
  ResponseGoodListType,
  StatusParamsType,
} from "../types/goodListType";

/**
 * 获取商品列表接口
 * @param goodListParams
 * @returns
 */
export const getGoodList = (goodListParams: GoodListParamsType) => {
  return request<ResponseGoodListType>("/goods/search", "POST", goodListParams);
};

/**
 * 修改商品状态接口
 * @param statusParams
 * @returns
 */
export const changeGoodStatus = (statusParams: StatusParamsType) => {
  return request("/goods/status", "PUT", statusParams);
};

/**
 * 删除商品接口
 * @param id
 * @returns
 */
export const delGood = (id: number) => {
  return request(`goods/${id}`, "DELETE");
};
