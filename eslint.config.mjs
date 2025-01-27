const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    env: { development: true },
    rules: {
      "no-console": "warn", // Only show warnings for console.logs
    },
  },
];

export default eslintConfig;

