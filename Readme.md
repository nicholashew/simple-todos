# Todo List (node express)

A sample todo list app using express and mongodb.

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.org/downloads)
- Command Line Tools

## Getting Started

```
# Install NPM dependencies
npm install

# Run MongoDB (Refer to section MongoDB Setup)
mongod

# Then simply start your app
npm run start
```

## MongoDB Setup

Create the following folder 
- C:\data\db

To start the mongo shell and connect to your MongoDB instance running on localhost with default port:

```
cd %mongodb_installation_dir%\bin && mongod

# Example
# cd C:\Program Files\MongoDB\Server\3.6\bin && mongod
```

If you have added the `%mongodb_installation_dir%\bin` to the PATH environment variable, you can just type `mongod` in any directory.

### Mongo Docs

- [mongoose Documentation](http://mongoosejs.com/docs/guide.html)
- [MongoDB Documentation](https://docs.mongodb.com/manual/mongo/#start-the-mongo-shell)

## License

The MIT License (MIT)