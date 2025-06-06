import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => User, { name: 'createUser', description: 'Create a new user' })
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): User {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users', description: 'Retrieve all users' })
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user', description: 'Retrieve a user by ID' })
  findOne(@Args('id', { type: () => ID }) id: string): User {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User, { name: 'updateUser', description: 'Update an existing user' })
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput): User {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => User, { name: 'removeUser', description: 'Delete a user by ID' })
  removeUser(@Args('id', { type: () => ID }) id: string): User {
    return this.usersService.remove(id);
  }
}
