import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';
import { LikesService } from './likes.service';
import { LikesResolver } from './likes.resolver';
import { PostResolver } from './posts.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'apps/comments-app', 'src/schema.gql'),
      },
      buildSchemaOptions: {
        orphanedTypes: [Post, User],
      },
      playground: false,
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      graphiql: false
    }),
  ],
  providers: [LikesResolver, LikesService, PostResolver],
})
export class LikesModule { }
