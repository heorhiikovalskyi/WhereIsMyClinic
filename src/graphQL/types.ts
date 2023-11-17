import graphql from 'graphql';
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

export const Clinic = new GraphQLObjectType({
  name: 'Clinic',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    city: { type: GraphQLString },
    suburbName: { type: GraphQLString },
    fullAddress: { type: GraphQLString },
    typeform: { type: GraphQLString },
    website: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    about: { type: GraphQLString },
    state: { type: GraphQLString },
    postCode: { type: GraphQLString },
  }),
});
