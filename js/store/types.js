import keyMirror from 'key-mirror'

/**
 * key-mirror：
 * keyMirror() 创建的对象，值会与名字一致，编码起来更方便
 * 使用key-mirror 将对象转换为react认识的类型
 * export const INCREASE = 'INCREASE';
 * export const DECREASE = 'DECREASE';
 * export const RESET = 'RESET';
 */

 export default keyMirror({
     INIT:null,
 })