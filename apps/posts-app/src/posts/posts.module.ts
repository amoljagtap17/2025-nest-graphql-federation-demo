import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'apps/posts-app', 'src/schema.gql'),
      },
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
      playground: false,
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      graphiql: false
    }),
  ],
  providers: [PostsResolver, UsersResolver, PostsService],
})
export class PostsModule { }
