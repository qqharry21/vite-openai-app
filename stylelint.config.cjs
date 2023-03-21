module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'mixin',
          'include',
        ],
      },
    ],
    'custom-property-pattern': null,
    'declaration-empty-line-before': null,
    'import-notation': null,
    'block-no-empty': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'order/order': ['custom-properties', 'declarations'],
    // 'order/properties-order': [
    //   'position',
    //   'top',
    //   'right',
    //   'bottom',
    //   'left',
    //   'z-index',
    //   'display',
    //   'float',
    //   'clear',
    //   'box-sizing',
    //   'width',
    //   'height',
    //   'margin',
    //   'padding',
    //   'border',
    //   'border-radius',
    //   'font',
    //   'font-family',
    //   'font-size',
    //   'font-weight',
    //   'line-height',
    //   'text-align',
    //   'text-decoration',
    //   'text-transform',
    //   'text-shadow',
    //   'color',
    //   'background',
    //   'background-color',
    //   'background-image',
    //   'background-repeat',
    //   'background-position',
    //   'opacity',
    //   'visibility',
    //   'list-style',
    //   'cursor',
    //   'transform',
    //   'transition',
    //   'animation',
    //   'pointer-events',
    //   'overflow',
    //   'clip',
    //   'filter',
    //   'resize',
    //   'user-select',
    //   'box-shadow',
    //   'outline',
    //   'table-layout',
    //   'caption-side',
    //   'empty-cells',
    // ],
    'scss/at-rule-no-unknown': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'rule-empty-line-before': [
      // 要求或禁止在规则声明之前有空行
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-empty-line-before': [
      // 要求或禁止在 at 规则之前有空行
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'comment-empty-line-before': [
      // 要求或在註釋之前空行空行
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'declaration-block-no-duplicate-properties': null, //在在塊中禁止出現重複的屬性
    'declaration-block-no-redundant-longhand-properties': true, //禁止禁止縮寫卻縮寫的屬性。
    'shorthand-property-no-redundant-values': true, //禁止禁止簡寫中使用。。。
    'function-url-quotes': 'always', //要求要求禁止禁止使用使用。。
    'color-hex-length': 'short', //指定指定進制是否使用縮寫
    'color-named': null, //要求（可能的下）或或命名顏色顏色
    'comment-no-empty': true, //禁止空註釋
    'font-family-name-quotes': 'always-unless-keyword', //指定指定名稱引起來引起來| 期待每不是字的字體名使用引起來引起來引起來
    'font-weight-notation': 'numeric', //要求要求或命名（可能的下）font-weight值
    'property-no-vendor-prefix': true, //禁止禁止使用引擎前綴
    'value-no-vendor-prefix': true, //禁止禁止值瀏覽器引擎前綴
    'selector-no-vendor-prefix': true, //禁止禁止瀏覽器前綴前綴
  },
};
