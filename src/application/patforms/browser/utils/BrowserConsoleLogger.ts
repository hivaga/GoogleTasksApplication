import { AbstractLogger } from '../../../common/services/logger/AbstractLogger';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 04.06.2017.
 */
export class BrowserConsoleLogger extends AbstractLogger
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

	constructor()
	{
		super();
		this.log(this.constructor.name+".constructor", "");

	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public log(...args: any[]): void
	{
		console.log("Log:",...args);
	}

	public error(...args: any[]): void
	{
		console.error("Error:",...args);
	}

	public warning(...args: any[]): void
	{
		console.warn("Warning:",...args);
	}

	public view(...args: any[]): void
	{
		console.log("View:",...args);
	}

	public model(...args: any[]): void
	{
		console.log("Model:",...args);
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}