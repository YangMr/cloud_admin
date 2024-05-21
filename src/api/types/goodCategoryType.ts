export type ResponseCategoryListType = {
  categoryId: number;
  categoryName: string;
};

export type CategoryParamsType = {
  /**
   * 页码
   */
  current: number;
  /**
   * 分类名称
   */
  name: string;
  /**
   * 条数
   */
  size: number;
};

export type ResponseCateogrySearchListType = {
  records: Record[];
  total: number;
  [property: string]: any;
};

export type Record = {
  id: number;
  name: string;
  remark: string;
  sort: number;
  status: boolean;
  [property: string]: any;
};
