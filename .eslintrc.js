/* vscode 需要配置
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "vetur.format.defaultFormatter.js": "prettier-eslint"
  }
*/
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  // plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        // 单个箭头函数不需要参数包裹
        // arrowParens: 'avoid',
        //在对象文本中在括号之间打印空格
        // bracketSpacing: true,
        // HTML空白的敏感性
        // htmlWhitespaceSensitivity: 'css',
        // jsx语法的标签闭合（ >）是否在新一行
        // jsxBracketSameLine: false,
        // 在JSX中使用单引号而不是双引号。
        // jsxSingleQuote: false,
        // 换行长度
        printWidth: 160,
        // 格式化特殊文件时候，按原文原样折行
        //只在需要时在对象属性周围添加引号。
        // quoteProps: 'as-needed',
        // 文件顶部不插入format特殊标记
        // insertPragma: false,
        // requirePragma: false,
        // 不使用分号
        semi: false,
        // 使用单引号
        // singleQuote: true,
        // tabWidth: 2,
        // 对象属性最后一位不需要逗号
        // trailingComma: 'none',
        // 取消用制表符代替空格
        // useTabs: false,
      },
    ],
    // 'vue/component-name-in-template-casing': [
    //   'error',
    //   'kebab-case',
    //   {
    //     registeredComponentsOnly: false,
    //     ignores: [],
    //   },
    // ],
    // //     // 一行最多几个属性
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 5,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false,
    //     },
    //   },
    // ],
  },
}

// module.exports = {
//   root: true,

//   globals: {
//     process: true
//   },

//   parserOptions: {
//     parser: 'babel-eslint',
//     sourceType: 'module',
//     ecmaFeatures:{
//       // 支持装饰器
//       legacyDecorators: true
//     }
//   },

//   env: {
//     browser: true,
//     node: true,
//     es6: true
//   },

//   extends: ['plugin:vue/recommended', 'eslint:recommended', "@vue/prettier"],
//   plugins: ['babel', 'prettier'],

//   rules: {
//     'prettier/prettier': [
//       'error',
//       {
//         arrowParens: 'avoid',
//         bracketSpacing: true,
//         htmlWhitespaceSensitivity: 'css',
//         insertPragma: false,
//         jsxBracketSameLine: false,
//         jsxSingleQuote: false,
//         printWidth: 80,
//         proseWrap: 'preserve',
//         quoteProps: 'as-needed',
//         requirePragma: false,
//         semi: false,
//         singleQuote: true,
//         tabWidth: 2,
//         trailingComma: 'none',
//         useTabs: false
//       }
//     ],
//     // 使用2个空格缩进
//     indent: [
//       'error',
//       2,indent
//       {
//         SwitchCase: 1,
//         flatTernaryExpressions: true
//       }
//     ],
//     // 是否能使用debugger,开发可以，线上不可以
//     'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
//     // switch必须提供 default
//     'default-case': 'error',
//     // 禁止扩展原生属性
//     'no-extend-native': 'error',
//     // 禁止一成不变的循环,防止代码出现死循环
//     'no-unmodified-loop-condition': 'error',
//     // 禁止在变量未声明之前使用
//     'no-use-before-define': 'error',
//     // 代码后不使用分号
//     semi: ['error', 'never'],
//     // 注释 // 或 /* 之后必须有一个空格
//     'spaced-comment': ['error', 'always'],
//     // 禁止重复导入模块，对于同一模块内内容，应一次导入
//     'no-duplicate-imports': 'error',
//     // 必须使用let 或 const, 不能使用var
//     'no-var': 'error',
//     // js中应使用单引号替代双引号
//     quotes: ['error', 'single'],
//     // 要求大括号内必须有空格
//     'object-curly-spacing': ['error', 'always'],
//     // 数组前后不需要添加空格
//     'array-bracket-spacing': ['error', 'never'],
//     // 箭头函数前后必须要有空格
//     'arrow-spacing': [
//       'error',
//       {
//         before: true,
//         after: true
//       }
//     ],
//     // 代码中可出现console
//     'no-console': 'off',
//     // 正则中可以出现控制字符
//     'no-control-regex': 'off',
//     'no-unused-vars': ['error', {
//       ignoreRestSiblings: true,
//       // 可以声明未使用的h，方便jsx
//       argsIgnorePattern: 'h'
//     }],
//     // 行注释必须在行上面
//     "line-comment-position":['error',{"position": "above" }],
//     // 一个函数最多能指定4个参数
//     "max-params":['error',{max:4}],
//     // 构造函数必须首字母大写
//     // "new-cap":['error', {"newIsCap": true} ],
//     // vue 属性顺序
//     'vue/attributes-order': [
//       'error',
//       {
//         order: [
//           'DEFINITION',
//           'LIST_RENDERING',
//           'CONDITIONALS',
//           'RENDER_MODIFIERS',
//           'GLOBAL',
//           'UNIQUE',
//           'TWO_WAY_BINDING',
//           'OTHER_DIRECTIVES',
//           'OTHER_ATTR',
//           'EVENTS',
//           'CONTENT'
//         ]
//       }
//     ],
//     // 一行最多几个属性
//     'vue/max-attributes-per-line': [
//       'error',
//       {
//         singleline: 5,
//         multiline: {
//           max: 1,
//           allowFirstLine: false
//         }
//       }
//     ],
//     // 组件名称必须是大驼峰
//     'vue/name-property-casing': ['error', 'PascalCase'],
//     // vue Html元素单标签关闭方式
//     'vue/html-self-closing': [
//       'error',
//       {
//         html: { normal: 'never', void: 'always' },
//         svg: 'always',
//         math: 'always'
//       }
//     ],
//     // 组件在template内必须使用 kebab-case 格式
//     "vue/component-name-in-template-casing": ["error", "kebab-case", {
//       "registeredComponentsOnly": false,
//       "ignores": []
//     }],
//     // template 内必须使用 ===
//     "vue/eqeqeq": 'error',
//     // scss deep 写法必须时 ::v-deep , 需要在这一处将 :v-deep 添加为例外
//     // "selector-pseudo-element-no-unknown":["error","v-deep"],
//     // 允许使用v-html
//     "vue/no-v-html":0,
//     // 禁用隐式的eval() 比如 setTimeout('alert();', 100)
//     "no-implied-eval": 'error'
//   },

//   // 单元测试相关
//   overrides: [
//     {
//       files: [
//         '**/__tests__/*.{j,t}s?(x)',
//         '**/tests/unit/**/*.spec.{j,t}s?(x)'
//       ],
//       env: {
//         jest: true
//       }
//     }
//   ]
// }
