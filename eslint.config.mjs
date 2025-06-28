import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "next-env.d.ts",

      ".env*",

      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",

      "public/**",
      "src/app/layout.tsx",
      "src/generated/index.ts",
      "eslint.config.mjs",
      "src/hooks/**",
      "src/components/ui/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
        },
        {
          selector: "function",
          format: ["camelCase"],
        },
        {
          selector: "variable",
          filter: {
            regex: "^[A-Z]",
            match: true,
          },
          format: ["PascalCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          prefix: ["I"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "method",
          format: ["camelCase"],
        },
        {
          selector: "property",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
      ],

      complexity: ["error", { max: 4 }],
      "max-depth": ["error", 2],
      "max-nested-callbacks": ["error", 2],
      "max-params": ["error", 4],

      "max-lines": [
        "error",
        {
          max: 160,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off",

      "react-hooks/exhaustive-deps": "error",

      "func-style": ["error", "declaration", { allowArrowFunctions: true }],

      "func-names": ["error", "always"],

      "prefer-arrow-callback": [
        "error",
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],

      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],

      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "error",
    },
  },
];

export default eslintConfig;
