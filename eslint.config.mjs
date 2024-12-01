import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended, // 修正: スプレッドを削除
  pluginReactConfig,
  // ルールを統一した形に修正
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      semi: ["error", "never"], 
      "comma-dangle": ["error", "never"], 
    },
  },
];
