/**
 * 用户管理相关接口
 */
import request from "@/utils/request";
import type {
  ResponseUserListType,
  UserListParamsType,
} from "../types/userType";

/**
 * 用户列表接口
 * @param userParams
 * @returns
 */
export const getUserList = (userListParams: UserListParamsType) => {
  return request<ResponseUserListType>(
    "/system/user/search",
    "POST",
    userListParams
  );
};
