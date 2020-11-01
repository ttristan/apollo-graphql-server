const testResolver = (parent, args, context) => {
  return {world: 'earth3'};
};

const exampleChangeMutation = (parent, args, context) => {
  const {id} = args;
  const coinflip = Math.floor(Math.random() * 2) === 0;

  if (coinflip) {
    return {
      id,
    };
  } else {
    throw new Error('Something went wrong.');
  }
};

const resolvers = {
  Query: {
    hello: testResolver,
  },
  Mutation: {
    exampleChange: exampleChangeMutation,
  },
};

module.exports = resolvers;
