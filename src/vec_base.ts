/**
 * 要实现的功能
 * @function create 创建一个向量
 * @function clone clone一个向量
 * @function set 设置一个向量
 * @function add 向量的加法
 *
 */
export interface IVec {
  /**
   *  @description 创建一个向量
   */
  create(): IVec;

  /**
   *  @description clone一个向量
   */
  clone(): IVec;

  /**
   *   @description 设置一个向量
   */
  set(): IVec;

  /**
   *  @description 向量的加法
   * @param vec
   */
  add(vec: IVec): IVec;

  /**
   *  @description 向量的减法
   * @param vec
   */
  subtract(vec: IVec): IVec;

  /**
   *  @description 向量的乘法
   * @param vec
   */
  multiply(vec: IVec): IVec;

  /**
   *  @description 向量的除法
   * @param vec
   */
  divide(vec: IVec): IVec;

  /**
   * @description 通过Math.min 依次对向量的同等位置的值获取最小值
   * @param vec
   */
   min(vec: IVec): IVec;

   /**
   * @description 通过Math.max 依次对向量的同等位置的值获取最大值
   * @param vec
   */
    max(vec: IVec): IVec;

  /**
   * @description 通过Math.ceil 对向量的每一个值都获取最大整数（向上取整）
   * @example Math.ceil(45.95); // 46
   * @example Math.ceil( 45.05); // 46
   * @example  Math.ceil( 4 ); // 4
   * @example  Math.ceil(-45.05); // -45
   * @example  Math.ceil(-45.95); // -45
   * @param vec
   */
  ceil(vec: IVec): IVec;

  /**
   *
   * @description 通过Math.floor 对向量的每一个值都获取最小整数（向下取整）
   * @example Math.floor( 45.95); // 45
   * @example Math.floor( 45.05); // 45
   * @example  Math.floor( 4 ); // 4
   * @example  Math.floor(-45.05); // -46
   * @example  Math.floor(-45.95); // -46
   * @param vec
   */
  floor(vec: IVec): IVec;

  /**
   *
   * @description 通过Math.round 对向量的每一个值都获取四舍五入值
   * @example Math.round(20.49);   //20
   * @example Math.round(20.5);    //21
   * @example  Math.round(-20.5);   //-20
   * @example  Math.round(-20.51);  //-21
   * @param vec
   */
   round(vec: IVec): IVec;


}
