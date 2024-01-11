import { Resolver, Query, Context, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.type';
import { Request } from 'express';
import { UseGuards } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';
import {v4 as uuid} from 'uuid';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js'



@Resolver()
export class UserResolver {}
