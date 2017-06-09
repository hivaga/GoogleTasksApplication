import { Injectable } from '@angular/core';
import { TasksModel } from '../models/TasksModel';
import { AbstractLogger } from '../services/logger/AbstractLogger';
import { AbstractCommand } from './AbstractCommand';
import { AbstractTasksService } from '../services/tasks/AbstractTasksService';
import { TaskVO } from '../models/vo/TaskVO';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@Injectable()
export class InitializeTasksModelCommand extends AbstractCommand
{
	// -----------------------------------------
	// STATIC PROPERTIES/METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(logger:AbstractLogger,
				private tasksModel:TasksModel,
				private taskService:AbstractTasksService)
	{
		super(logger);
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public execute():void
	{
		super.execute();
		this.taskService.listTasksList().then((result)=> this.logger.log(this.constructor.name+".", result));
		this.taskService.addTasksList(new TaskVO("Test List 1")).then((result)=>this.logger.log(this.constructor.name+".", result))
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------
	private updateTasksModelHandler(tasks:TaskVO[]):void
	{
		this.logger.log(this.constructor.name+".updateTasksModelHandler", "Initial Tasks List received:",tasks);

	}

}
