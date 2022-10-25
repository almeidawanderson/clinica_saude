import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

 async create(createUserDto: CreateUserDto): Promise<UserEntity> {  
  
  return 
  }

  findAll() {
    return;
  }

 async findById(user_cpf: number): Promise<UserEntity> {
   return await this.userRepository.find({
     where: {
       user_cpf: user_cpf
     }
   })
 }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
