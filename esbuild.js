require("esbuild")
  .build({
    bundle: true,
    entryPoints: ["src/index.tsx"],
    loader: {},
    mainFields: ["main", "module"],
    outfile: "build/index.js",
    watch: true,
  })
  .catch(() => process.exit(1));
