// 定义用户列表参数类型
export type UserListParamsType = {
  /**
   * 页码
   */
  current: number;
  /**
   * 查询关键字
   */
  keyword: string;
  /**
   * 条数
   */
  size: number;
};

// 定义后台返回的用户列表参数类型
export type ResponseUserListType = {
  records: Record[];
  total: number;
};

export type Record = {
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  createTime: string;
  credentialsNonExpired: boolean;
  email: string;
  id: number;
  imageUrl: string;
  mobile: string;
  nickName: string;
  password: string;
  remark: string;
  roleIds: number[];
  updateTime: string;
  username: string;
  [property: string]: any;
};
