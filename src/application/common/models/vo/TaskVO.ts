import { AbstractCloneVO } from './AbstractCloneVO';
import { Data } from '@angular/router';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 04.06.2017.
 */
export class TaskVO extends AbstractCloneVO<TaskVO>
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
	public readonly children:TaskVO[] = [];
	public title:string;
	public date:Date;

	/**
	 * This is unique ID for each Task, since they can have same names.
	 */
	public id:string;

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(title:string, id?:string, date?:Date)
	{
		super();
		this.title = title;
		this.id = id;
		this.date = date;
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public addChildTasks(tasks:TaskVO[]):void
	{
		tasks.forEach((item:TaskVO)=>this.addChildTask(item));
	}

	public addChildTask(vo:TaskVO):void
	{
		this.children.push(vo.clone());
	}

	public clone():TaskVO
	{
		let vo:TaskVO = new TaskVO(this.title);
		vo.addChildTasks(this.children);
		return vo;
	}


	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
