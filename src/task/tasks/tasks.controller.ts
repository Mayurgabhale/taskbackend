import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '../entity/task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService:TasksService){}

    @Get()
    getAllTasks(){
        return this.tasksService.findAll();
    }

    @Get(':id')
    getTask(@Param('id') id:number){
        return this.tasksService.findOne(id);
    }

     @Post()
     createTask(@Body() task:Task){
        return this.tasksService.create(task);
     }

     @Put(':id')
     updateTask(@Param('id') id:number,@Body() task:Task){
        return this.tasksService.update(id,task);
     }

     
    @Delete(':id')
    deleteTask(@Param('id') id: number) {
      return this.tasksService.remove(id);
    }
}
