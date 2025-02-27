import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  User,
  UserSchema,
} from '@clickvote/backend/src/packages/users/users.document';
import { UsersRepository } from '@clickvote/backend/src/packages/users/users.repository';
import { UsersService } from '@clickvote/backend/src/packages/users/users.service';
import {EncryptionService} from "@clickvote/nest-libraries";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [UsersRepository, UsersService, EncryptionService],
  exports: [UsersService, EncryptionService],
})
export class UsersModule {}
