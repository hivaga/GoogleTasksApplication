import { AbstractLogger } from '../services/logger/AbstractLogger';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
export abstract class AbstractCommand
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
	/**
	 * Should be triggered externally  by signal with parameters if needed.
	 *
	 * TODO trigger by Signal with params and return a Promise.
	 *
	 * @param any
	 */
	public execute(...any:any[]):void
	{
		this.logger.log(this.constructor.name+".execute", "");
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
