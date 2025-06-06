import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'apps/users-app', 'src/schema.gql'),
      },
      playground: false,
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      graphiql: false
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule { }
