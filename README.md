# Start write test

一起学习如何写 test 吧！

## Start

```bash
yarn install
yarn test
```

## Steps

> 分享主要使用 jest 这款测试框架

### Challenge I

- 自行阅读 jest 文档
  - 理解 expect、matcher、async test、setup&teardown、mockFunction
  - [Jest·开始](https://doc.ebichu.cc/jest/docs/zh-Hans/getting-started.html)
  - [Jest·start](https://facebook.github.io/jest/docs/en/getting-started.html)
- 完成 base 版 `Object.assign` 测试代码

#### Target

- 理解 TDD、BDD
- 能够写出 TDD、BDD 对应的 test 代码
- 能够使用 `jest` 进行测试

#### 当前需要做：

- 自行完成 assign 这个函数（`./src/challenge-1/assign`）
- 自行完成测试（`./src/challenge-1/assign.test.js`）

### Challenge II

本挑战主要为 TDD 和 BDD 在模块编写时的实际使用。

#### 主要目标

用 TDD 的方式实现一个 Promise A+ 的 Promise

步骤:

1.根据 [Promise A+ spec](https://promisesaplus.com/) 编写自己的 test 文件。 
2.根据上一步编写的 test case 实现你的 Promise。 
3.提交 PR 并通过 CI 自动化测试。 
4.将你实现的 Promise 通过 Promise A+ 的[官方测试](https://github.com/promises-aplus/promises-tests) (暂未加入本项目)。

提示：

1.可以随意 Google，只要实现即可。互相 Review。

进阶：

1.生成代码覆盖率 
2.编写 benchmark 和其他人的实现进行比较 
3.发布 npm

### Challenge III

本挑战主要实践 Jest 和 enzyme 编写 UI 测试 (React 组件)。

#### 主要目标

用 TDD 和 BDD 的方式编写一个 Message React 组件。


### 测试分类

测试主要分为以下几类：

- 单元测试
- 集成测试
- 端到端测试
- UI测试
