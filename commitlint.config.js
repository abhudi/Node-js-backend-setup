module.exports = {
  extends: ["@commitlint/cli", "@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "perf",
        "fix",
        "refactor",
        "docs",
        "style",
        "test",
        "chore",
        "revert",
        "ci",
        "build",
      ],
    ],
    "subject-case": [2, "always", "sentence-case"],
  },
};
