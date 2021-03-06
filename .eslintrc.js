module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'camelcase': 'off',
        'indent': [0, 4], //缩进风格
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
