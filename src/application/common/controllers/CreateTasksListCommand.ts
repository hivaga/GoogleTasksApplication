import { AbstractLogger } from '../services/logger/AbstractLogger';
import { AbstractTasksService } from '../services/tasks/AbstractTasksService';
import { AbstractCommand } from './AbstractCommand';
import { TaskVO } from '../models/vo/TaskVO';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
export class CreateTasksListCommand extends AbstractCommand
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

	constructor(logger:AbstractLogger, private tasksService:AbstractTasksService)
	{
		super(logger);
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public execute(taskVO:TaskVO):void
	{
		super.execute();

		this.logger.log(this.constructor.name+".execute", "Adding Task List:",taskVO);

		this.tasksService.addTasksList(taskVO);
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
