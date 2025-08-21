import { execSync } from "child_process";
import fs from "fs-extra";
import chalk from "chalk";

export async function setup() {
    console.log(chalk.cyan("\n🚀 Setting up NativeWind with Titan..."));

    // 1. Install dependencies
    console.log(chalk.yellow("\n📦 Installing dependencies..."));
    execSync(
        "npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0 --save",
        { stdio: "inherit" }
    );
    execSync(
        "npm install --save-dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11",
        { stdio: "inherit" }
    );

    // 2. Tailwind config
    if (!fs.existsSync("tailwind.config.js")) {
        fs.writeFileSync(
            "tailwind.config.js",
            `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};`
        );
        console.log(chalk.green("✅ Created tailwind.config.js"));
    }

    // 3. global.css
    if (!fs.existsSync("global.css")) {
        fs.writeFileSync(
            "global.css",
            `@tailwind base;
@tailwind components;
@tailwind utilities;`
        );
        console.log(chalk.green("✅ Created global.css"));
    }

    // 4. Babel config
    const babelPath = "babel.config.js";
    if (!fs.existsSync(babelPath)) {
        fs.writeFileSync(
            babelPath,
            `module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};`
        );
        console.log(chalk.green("✅ Created babel.config.js"));
    }

    // 5. Metro config
    if (!fs.existsSync("metro.config.js")) {
        fs.writeFileSync(
            "metro.config.js",
            `const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });`
        );
        console.log(chalk.green("✅ Created metro.config.js"));
    }

    // 6. app.json patch
    if (fs.existsSync("app.json")) {
        const appJson = fs.readJSONSync("app.json");
        appJson.expo = appJson.expo || {};
        appJson.expo.web = { bundler: "metro" };
        fs.writeJSONSync("app.json", appJson, { spaces: 2 });
        console.log(chalk.green("✅ Patched app.json with Metro bundler"));
    }

    // 7. TypeScript types setup
    const tsconfigExists = fs.existsSync("tsconfig.json");
    if (tsconfigExists) {
        const typesFile = "nativewind-env.d.ts";
        if (!fs.existsSync(typesFile)) {
            fs.writeFileSync(
                typesFile,
                `/// <reference types="nativewind/types" />`
            );
            console.log(chalk.green("✅ Added nativewind-env.d.ts for TypeScript support"));
        }
    }

    console.log(chalk.cyan("\n🎉 NativeWind is ready! Import './global.css' in your App.js/App.tsx and run `npm start -- --clear`\n"));
}
