import { AbstractCommand } from './AbstractCommand';
import { AbstractLogger } from '../services/logger/AbstractLogger';
import { TasksModel } from '../models/TasksModel';
import { AbstractTasksService } from '../services/tasks/AbstractTasksService';
import { TaskVO } from '../models/vo/TaskVO';
import { Injectable } from '@angular/core';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@Injectable()
export class LoadTaskGroupsCommand extends AbstractCommand
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
		this.taskService.listTasksList().then(this.updateTasksModel.bind(this));
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------
	private updateTasksModel(tasks:Array<TaskVO>):void
	{
		this.logger.log(this.constructor.name+".updateTasksModel", tasks);

		tasks.forEach((vo:TaskVO)=>{this.tasksModel.addTaskList(vo)});

	}

}
