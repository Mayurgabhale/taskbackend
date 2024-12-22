import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entity/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private taskRepository:Repository<Task> ){

    }


    findAll():Promise<Task[]>{
        return this.taskRepository.find();
    }

    findOne(id:number):Promise<Task>{
        return this.taskRepository.findOne({where:{id}})
    }

    async create(task:Partial<Task>):Promise<Task>{
        return this.taskRepository.save(task)
    }
    async update(id:number,task:Partial<Task>):Promise<Task>{
        await this.taskRepository.update(id,task);
        return this.findOne(id)
    }


    async remove(id:number):Promise<void>{
        await this.taskRepository.delete(id);
    }
}
