---
layout: default
title: 付瑶 · Yao Fu
description: 后端工程师，长期做路径规划、优化引擎、地图类系统。
---

# 付瑶 · Yao Fu

[fubupc@gmail.com](mailto:fubupc@gmail.com) · [github.com/fubupc](https://github.com/fubupc) · [LinkedIn](https://www.linkedin.com/in/yao-fu-b8965271/)

## 关于我

后端工程师，15+ 年经验，长期做路径规划、优化引擎、地图类系统，主用 Go 和 Rust。

## 路径优化服务的重构工作

回 NextBillion 后接手了一个路径优化服务的请求接入层（不含算法本身）。原有代码结构比较混乱，半年里一边配合算法引擎做新功能开发和线上 bug 修复，一边推进重构——分层抽象、拆解大对象、消除并发隐患、补足关键测试。

## 发起了一个内部技术知识库

把分散在口头传承、聊天记录、个人笔记里的部署流程、排错经验、服务架构、基础设施细节系统化整理出来，做成一个 AI 和开发人员都能直接读懂的知识库——既方便新人快速建立对公司基础设施的整体认知，也为后续接入"数字员工"（AI agent 自动完成运维、排障、开发任务）打下了基础。

现在多个服务的开发文档都引用它，团队和 AI agent（Cursor / Claude Code）在日常工作里都在用。

## Grab 路径规划引擎（Go 重写 OSRM）

Grab 原本的路径规划服务基于 C++ 的 OSRM。出于公司技术栈以 Go 为主、业务集成成本、以及核心组件自研以积累技术储备等考量，团队启动了 Go 重写项目，第一个可用版本由我独立完成，后续与团队一起迭代。平均延迟可以做到接近 OSRM，但 P99 由于 GC 仍有明显差距。上线后成为 Grab 地理服务的核心组件，支撑东南亚的司机匹配、计费、ETA 预测等业务。

## 其他独立负责的项目

- **路径优化平台的可视化前台**（Rust/Axum + React 全栈）：用于监控、调试、可视化优化结果。后端用事件溯源设计——所有事件落库，状态视图由纯函数从事件流重建，从机制上消除乱序、晚到、重复、崩溃恢复等问题。
- **实时交通系统**（Rust + OpenLR）：整合多源交通数据给路径规划用。

## Rust 与底层方向的学习

2022 年起业余系统性学习 Rust，覆盖 ownership / lifetime / trait 体系、async 运行时机制、proc-macro、type-level 编程等；通过 bare-metal OS、proc-macro 库、HTTP/3 异步系统等项目落地实践。

## 工作经历

**NextBillion.ai · 高级后端工程师** · 2025.08 – 至今
:   路径优化服务的接入层维护与重构；可视化前台与对外 API 全栈开发

**自学 / 技术探索** · 2022.06 – 2025.08
:   Rust 系统编程、proc-macro、async、type-level 编程；区块链；React

**NextBillion.ai · 高级后端工程师** · 2020.03 – 2022.06
:   实时交通系统（Rust + OpenLR）；ETA 调优；地图缺陷自动检测

**Grab · 高级后端工程师** · 2016.04 – 2020.03
:   Go 重写 OSRM 路径规划引擎；矢量地图瓦片渲染；ETA 预测优化

**Alibaba · DevOps** · 2013.09 – 2015.07

**数云 · 系统管理员** · 2011.11 – 2013.08

## 教育

中南大学 · 物理学学士 · 2003 – 2007

## 技术栈

Rust · Go · Python · JavaScript · PostgreSQL · Linux · Kubernetes · Docker · GCP / AWS
