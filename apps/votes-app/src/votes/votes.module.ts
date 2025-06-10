import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { VotesService } from './votes.service';
import { VotesResolver } from './votes.resolver';
import { Post } from './entities/post.entity';
import { PostResolver } from './posts.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'apps/votes-app', 'src/schema.gql'),
      },
      buildSchemaOptions: {
        orphanedTypes: [Post],
      },
      playground: false,
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      graphiql: false
    }),
  ],
  providers: [VotesResolver, VotesService, PostResolver],
})
export class VotesModule { }
