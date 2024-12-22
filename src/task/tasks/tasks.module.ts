// src/tasks/tasks.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from '../entity/task.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Ensure Task entity is imported here
  controllers: [TasksController], // Register TasksController here
  providers: [TasksService],
})
export class TasksModule {}
