棋盘
分三层
棋盘初始化
[
  [ undefined,undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [ undefined,undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [ undefined,undefined, undefined, undefined, undefined, undefined, undefined, undefined ]
]

玩家：0，1

[
  [ 1, 1, 1, 0, 0, 1, 0, undefined ],
  [ 1, 0, undefined, 1, undefined, 0, 0, 1 ],
  [ 0,1, undefined, undefined, 0, 1, 0, undefined ]
]

算法判定
1. 下完子后相同下标数字相同，可提对方一子 如：（0，0，0）斜（1，1，1）直
2. 下完子后连续下标数字相同，（0， 1， 2）（2， 3，4），（4， 5，6），（6，7， 0） 可提对方一子


判断可走路径
当前下标减1，或者加1，等于8时另外处理
或者向外层或者内层移动到相同下标
若存在己\对方棋子则不可走


