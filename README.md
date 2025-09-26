# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Installed Packages
- 🎨 **[Material-UI](https://mui.com/material-ui/getting-started/)** - React component library that implements Google's Material Design.
- 🔗 **[React Router](https://reactrouter.com/start/declarative/routing)** - Installed declarative mode.
- ✨ **[ESLint](https://eslint.org/docs/latest/) + [Prettier](https://prettier.io/docs/)** - Linting and code formatting.

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Usage
Use [degit](https://github.com/Rich-Harris/degit) to copy the template to your local project.
```console
# change `my-project` with your project name.
npx kamoteshake/minimal-react-vite-template#main my-project

# move to the project folder
cd ./my-project

# install all packages
yarn install

# start the app locally
yarn dev
```

### Git
If you want to have your project linked to a repository, you can initialize git inside of your project folder.
```console
# you can change `main` to your default branch
git init -b main

# adds a remote called origin which links to your git repository
# change `remote_repository_URL` to your git repository URL
git remote add origin <remote_repository_URL>

# commit changes
git add .
git commit -m "Initial commit"

# push the changes to the remote repository
# assuming your branch name is `main`
git push origin main
