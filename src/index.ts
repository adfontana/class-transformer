import 'reflect-metadata';
import users from './data/users.json';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { User } from './modules/user/User';

const instanceObjs = plainToInstance(User, users);

const plainObjs = instanceToPlain(instanceObjs);

console.log(instanceObjs.map(item => item.getName()));
console.log(plainObjs);
