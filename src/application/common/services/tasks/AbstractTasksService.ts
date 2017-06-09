import { TaskVO } from '../../models/vo/TaskVO';
import { AbstractLogger } from '../logger/AbstractLogger';
import { GoogleTaskListResourceVO } from './google/GoogleTasksAPI';
import { SignalOne } from '../../signals/SignalOne';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 07.06.2017.
 */
export abstract class AbstractTasksService
{
	// -----------------------------------------
	// STATIC PROPERTIES/METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------
	/**
	 * Dispatched to notify if the connection to external data source have been established.
	 *
	 * @type {SignalOne<boolean>}
	 */
	public readonly onConnected:SignalOne<boolean> = new SignalOne<boolean>();

	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------
	protected logger:AbstractLogger;

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(logger:AbstractLogger)
	{
		this.logger = logger;
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public abstract connect(...any:any[]):void

	public abstract addTask(parentTaskVO:TaskVO, taskVO:TaskVO):Promise<boolean>;

	public abstract addTasksList(taskVO:TaskVO):Promise<boolean>;

	public abstract listTasksList():Promise<Array<TaskVO>>;

	public abstract deleteTask(taskVO:TaskVO):Promise<boolean>;

	public abstract deleteTasksList(taskVO:TaskVO):Promise<boolean>;

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
