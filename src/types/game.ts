import type Role from "../enums/Role";

// 每个格子被占用的情况
export type SpotState = Array<Role.black | Role.red | undefined>

// 每层 8 个
export type GameWrapModal = [SpotState, SpotState, SpotState, SpotState, SpotState, SpotState, SpotState, SpotState]

// 数据源格式
export type GameModel = [
  GameWrapModal,
  GameWrapModal,
  GameWrapModal
]
