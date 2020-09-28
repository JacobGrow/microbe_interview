const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const Db = require('./config/database');


const Contact = new GraphQLObjectType({
  name: 'Contact',
  description: 'This represents a Contact',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve (contact) {
          return contact.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve (contact) {
          return contact.name;
        }
      },
      role: {
        type: GraphQLString,
        resolve (contact) {
          return contact.role
        }
      },
      email: {
        type: GraphQLString,
        resolve (contact) {
          return contact.email;
        }
      },
      phone: {
        type: GraphQLString,
        resolve (contact) {
          return contact.phone;
        }
      }
    };
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      contacts: {
        type: new GraphQLList(Contact),
        args: {
          id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          }
        },
        resolve (root, args) {
          return Db.models.contact.findAll({ where: args });
        }
      },
    };
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Create, Update',
  fields () {
    return {
      addContact: {
        type: Contact,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString)
          },
          role: {
            type: new GraphQLNonNull(GraphQLString)
          },
          email: {
            type: new GraphQLNonNull(GraphQLString)
          },
          phone: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve (source, args) {
          return Db.models.contact.create({
            name: args.name,
            role: args.role,
            email: args.email.toLowerCase(),
            phone: args.phone
          });
        }
      },
    };
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = Schema;