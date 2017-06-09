import { TaskVO } from './vo/TaskVO';
import { AbstractModel } from './AbstractModel';
import { Injectable } from '@angular/core';
import { AbstractLogger } from '../services/logger/AbstractLogger';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@Injectable()
export class TasksModel extends AbstractModel
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
	private taskListArray:Array<TaskVO>;

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(logger:AbstractLogger)
	{
		super(logger);
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public init():void
	{
		this.taskListArray = [];
	}


	public getTaskByID(id:string):TaskVO
	{
		return undefined;
	}

	public getTaskListByID(id:string):TaskVO
	{
		return undefined;
	}

	/**
	 * Use this task for both add and update task.
	 *
	 * @param vo
	 * @returns {undefined}
	 */
	public addTaskList(vo:TaskVO):void
	{
		return undefined;
	}

	public removeTaskList(vo:TaskVO):void
	{
		return undefined;
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
