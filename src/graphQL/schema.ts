import graphql from 'graphql';
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = graphql;
import { Clinic } from './types.js';
import { ClinicsRepository } from '../repositories/Clinics/index.js';

const { getByCity, getByName, getByState, getBySuburb, getByZip } = ClinicsRepository.getInstance();

const serverError = { message: 'Internal server error', code: 500 };

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getByCity: {
      type: new GraphQLList(Clinic),
      args: { city: { type: GraphQLString } },
      async resolve(parent, args) {
        return await getByCity(args.city).catch(() => {
          throw serverError;
        });
      },
    },

    getByName: {
      type: new GraphQLList(Clinic),
      args: { name: { type: GraphQLString } },
      async resolve(parent, args) {
        return await getByName(args.name).catch(() => {
          throw serverError;
        });
      },
    },

    getByState: {
      type: new GraphQLList(Clinic),
      args: { state: { type: GraphQLString } },
      async resolve(parent, args) {
        return await getByState(args.state).catch(() => {
          throw serverError;
        });
      },
    },

    getBySuburb: {
      type: new GraphQLList(Clinic),
      args: { suburb: { type: GraphQLString } },
      async resolve(parent, args) {
        return await getBySuburb(args.suburb).catch(() => {
          throw serverError;
        });
      },
    },

    getByZip: {
      type: new GraphQLList(Clinic),
      args: { zip: { type: GraphQLString } },
      async resolve(parent, args) {
        return await getByZip(args.zip).catch(() => {
          throw serverError;
        });
      },
    },
  },
});

export const schema = new GraphQLSchema({ query: RootQuery });
