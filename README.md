# Phone Store Application

## Introduction

Welcome to the Phone Store Application! This project is a full-stack web application designed to manage and display a collection of phones. It includes both a client-side application built with React and a server-side application built with Node.js and Express.

## Project Structure

The project is organized into two main directories: `client` and `server`.

```plaintext
phone-store/
├── client/
│   ├── .editorconfig
│   ├── .eslintignore
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── .prettierignore
│   ├── .prettierrc
│   ├── .storybook/
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.cjs
│   ├── public/
│   ├── src/
│   ├── tailwind.config.cjs
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vercel.json
│   ├── vite.config.ts
│   ├── vitest.setup.js
│   └── README.md
└── server/
    ├── .DS_Store
    ├── .env
    ├── .gitignore
    ├── .prettierrc
    ├── @types/
    ├── constants/
    ├── controllers/
    ├── database/
    ├── Ecommerce.postman_collection.json
    ├── ecosystem.config.js
    ├── environments/
    ├── index.ts
    ├── middleware/
    ├── package.json
    └── README.md
```

## How to Run

### Prerequisites

- Node.js
- Yarn

### Running the Client

1. Navigate to the `client` directory:

   ```sh
   cd client
   ```

2. Install the dependencies and start the client application:

   ```sh
   yarn && yarn start
   ```

### Running the Server

1. Navigate to the `server` directory:

   ```sh
   cd server
   ```

2. Install the dependencies:

   ```sh
   yarn
   ```

3. Start the server:

   ```sh
   yarn start
   ```

## Functionality

### Client

The client-side application is built with React and includes the following features:

- **File Upload**: Users can upload images using the [`InputFile`](client/src/components/InputFile/InputFile.tsx) component.
- **User Authentication**: Managed through the [`AppContext`](client/src/contexts/app.context.tsx).
- **Routing**: Handled by React Router.

### Server

The server-side application is built with Node.js and Express and includes the following features:

- **API Endpoints**: Defined in the [`controllers`](server/controllers) directory.
- **Database Integration**: Uses MongoDB for data storage.
- **Environment Configuration**: Managed through `.env` files.

## Conclusion

This project serves as a comprehensive example of a full-stack web application. Feel free to explore the codebase and contribute to its development.

## Author

### Le Quoc Dat

Passionate software developer with a knack for creating efficient and user-friendly applications. Dedicated to continuous learning and improvement, always exploring new technologies and methodologies.

- **Portfolio:** [Website Portfolio](https://ledat-portfolio.vercel.app/)
- **GitHub:** [Le Quoc Dat](https://github.com/le-dat)
- **LinkedIn:** [Le Quoc Dat](https://www.linkedin.com/in/le-quoc-dat)

Feel free to reach out for collaboration or any inquiries!
