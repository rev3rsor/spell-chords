require("esbuild")
  .build({
    bundle: true,
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    entryPoints: ["src/index.tsx"],
    loader: {},
    mainFields: ["main", "module"],
    minify: true,
    outfile: "dist/index.js",
  })
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
