const { UserList } = require("../fakeData")

const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (_, args) => {
            return UserList.find(user => user.id === +args.id)
        }
    },
    Mutation: {
        createUser : (_, args) => {
            UserList.push({
                ...args.input,
                id: UserList[UserList.length - 1].length
            })
             return args.input;
        }
    }
};

module.exports = {resolvers}