This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Install Dependencies

- To install the necessary dependencies, run:

```bash
npm Install
# or
yarn install
```

- To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Once started, Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Git Hooks

This project uses Git hooks to maintain code quality and enforce commit message standards.

### Pre-commit

- Formats staged files with Prettier.
- Lints staged files with ESLint.

### Commit Message

- Enforces commit message conventions using Commitlint and Commitizen to assist in crafting those messages.

#### To create a commit using Commitizen, run:

```bash
npm run ctzn
```

### Pre-push

- Executes all tests with Jest before allowing code to be pushed to the repository.

### Bypassing Hooks

- If you need to bypass the hooks, use the `--no-verify` flag. However, please exercise caution and use this option responsibly.

#### To run the test suite locally, execute:

```bash
npm test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<h2>Here is snap of create account page</h2>
<img width="900" alt="Create-page" src="https://github.com/project-ascend-io/intracom-webapp/assets/133456854/beebf8e5-58a3-4f2d-988d-806584197d74">
<h2>This is the response page of the successful Account created</h2>
<img width="900" alt="Success-page" src="https://github.com/project-ascend-io/intracom-webapp/assets/133456854/60c6bcff-f822-4aa6-8097-197c6bf8edd2">
