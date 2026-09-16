
const { ApiDef } = require('@voxgig/apidef')

const opts = {
  folder: __dirname + '/../model',

  // A GraphQL schema declares no server URL, so the endpoint can only arrive
  // as a build option. apidef refuses the build without it:
  //
  //   parse: GraphQL: an endpoint option is required
  //     (a GraphQL schema declares no server URL)
  //
  // Same shape as meetup, the other GraphQL SDK in this fleet.
  endpoint: 'https://api.linear.app/graphql',
}

module.exports = ApiDef.makeBuild(opts)
