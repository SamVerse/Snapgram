# 📸 Snapgram

Snapgram is a modern social media app inspired by Instagram. Built with React, TypeScript, and Appwrite, it offers a smooth and interactive experience with features like infinite scrolling and responsive design. 🚀

## 🎨 Features

- **🔐 Authentication**: Secure login and signup.
- **🏠 Home Page**: Infinite scrolling with posts from others and top creators.
- **🔍 Explore Page**: Discover new posts and creators.
- **💾 Saved Posts**: View and manage your saved content.
- **📝 Create Post**: Easy file management with drag-and-drop.
- **👤 Profile Page**: Edit your profile, view your posts, and liked content.
- **📱 Responsive Design**: Seamless experience across devices.

## ⚙️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Appwrite
- **State Management**: TanStack Query (React Query)
- **Forms & Validation**: Shadcn Forms, Zod Validation

## 🚀 Getting Started

1. **Clone the Repo:**

   ```bash
   git clone https://github.com/your-username/snapgram.git
   
2. **Install Dependencies:**

  cd snapgram
  npm install
  Start the App:
  
3. **Start the app**
  npm start
#🌟 Learn More
For more details, check out the docs or contact me if you have any questions!

#🤝 Contributing
Feel free to open issues or submit pull requests. Your contributions are welcome!

**Happy coding! 🎉**


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
