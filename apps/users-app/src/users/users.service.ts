import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  private users: User[] = [];

  create(createUserInput: CreateUserInput): User {
    const newUser: User = {
      id: randomUUID(),// Simple ID generation for demonstration
      ...createUserInput,
    };

    this.users.push(newUser);

    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find(user => user.id === id);

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    return user;
  }

  update(updateUserInput: UpdateUserInput): User {
    const userIndex = this.users.findIndex(user => user.id === updateUserInput.id);

    if (userIndex === -1) {
      throw new Error(`User with ID ${updateUserInput.id} not found`);
    }

    const updatedUser: User = {
      ...this.users[userIndex],
      ...updateUserInput,
    };

    this.users[userIndex] = updatedUser;

    return updatedUser;
  }

  remove(id: string): User {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      throw new Error(`User with ID ${id} not found`);
    }

    const removedUser = this.users[userIndex];

    this.users.splice(userIndex, 1);

    return removedUser;
  }
}
