import 'reflect-metadata';
import users from './data/users.json';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { User } from './modules/user/User';

console.log('Using instanced objects');
const instanceObjs = plainToInstance(User, users, { excludeExtraneousValues: true });
console.log(instanceObjs.map(item => item.getName()));

console.log('');

console.log('Instanced objects to plain objects');
const plainObjs = instanceToPlain(instanceObjs, { exposeUnsetFields: false });
console.log(plainObjs);
