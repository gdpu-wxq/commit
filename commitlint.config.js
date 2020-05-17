module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*) (#(.+)#): (.+)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        '新功能',
        '更新', // 更新功能
        '修补', // 修补Bug
        '文档',
        '配置', // 修改配置
        '重构',
        '恢复', // 代码重置恢复
        '冲突', // 代码冲突解决
        '格式', // 文件和代码的整理、格式化
        '测试',
      ],
    ],
  },
}
