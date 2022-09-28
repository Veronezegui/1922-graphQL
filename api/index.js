const { ApolloServer} = require('apollo-server')

const { mergeTypeDefs} = require('graphql-tools')

const userSchema = require('./user/schema/user.graphql')
const produtoSchema = require('./produto/schema/produto.graphql')

const userResolvers = require('./user/resolvers/userResolvers.js')
const UsersAPI = require('./user/datasource/user')
//const produtoResolvers = require('./produtos/resolvers/produtoResolvers')

const typeDefs = [userSchema]

const resolvers = [userResolvers]

const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    dataSources: () => {
        return {
            usersAPI: new UsersAPI()
    
        }
    }
})

server.listen().then(({url}) => {
    console.log(`Servidor rodando na porta ${url}`)
})
