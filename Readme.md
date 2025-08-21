````markdown
# ezet-titan-nativewind

🚀 **Auto-setup for NativeWind in Expo & React Native**  
A CLI tool that makes setting up [NativeWind](https://www.nativewind.dev/) seamless in your Expo or React Native projects.  

---

## 📦 Installation

You can install the package globally (recommended) or as a dev dependency in your project.

### Global install

```bash
npm i -g ezet-titan-nativewind
````

### Local install

```bash
npm i --save-dev ezet-titan-nativewind
```

---

## ⚡ Usage

After installation, simply run the command:

```bash
npx tit-setup
```

This will automatically:

* Install NativeWind & Tailwind dependencies
* Setup required configuration files (`tailwind.config.js`, `babel.config.js`)
* Link styles into your project
* Ensure smooth NativeWind integration with Expo & React Native

---

## 🛠 Example Workflow

1. Create a new Expo app:

   ```bash
   npx create-expo-app my-app
   cd my-app
   ```

2. Run the setup command:

   ```bash
   npx tit-setup
   ```

3. Start the project:

   ```bash
   npm start
   ```

Now you’re ready to use **Tailwind CSS classes** inside your React Native components ✨

---

## 🔑 Command

| Command          | Description                           |
| ---------------- | ------------------------------------- |
| `npx tit-setup` | Run auto-setup for NativeWind project |

---

## 📋 Example Component

```jsx
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-600">
      <Text className="text-white text-xl font-bold">Hello NativeWind 🚀</Text>
    </View>
  );
}
```

---

## 📄 License

This project is licensed under the **ISC License**.
Created with 💟 by [Ezet Industries](https://ezet.vercel.app).

---

2025 © Ezet Industries

```
