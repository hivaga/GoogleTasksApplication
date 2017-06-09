import { Component } from '@angular/core';
import { AbstractComponent } from '../AbstractComponent';
import { AbstractLogger } from '../../services/logger/AbstractLogger';
import { TreeNode } from 'primeng/primeng';


/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 04.06.2017.
 */
@Component({
	selector: "TasksGroupsList",
	templateUrl: "./TasksGroupsList.html"
})
export class TasksGroupsList extends AbstractComponent
{
	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// @INPUT PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// @OUTPUT PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------
	public test: string = "test";

	public tasksArray: TreeNode[] = [
		{
			"label": "Movies",
			"expandedIcon": "fa-folder-open",
			"collapsedIcon": "fa-folder",
			"children":[{
				"label": "Comedies",
				"data": "Pacino Movies"}]
		},
		{
			"label": "Work",
			"expandedIcon": "fa-folder-open",
			"collapsedIcon": "fa-folder",
			"children":[{
				"label": "Training",
				"data": "Pacino Movies"},
				{
					"label": "Important",
					"data": "Pacino Movies"}]
		},
		{
			"label": "Others",
			"expandedIcon": "fa-folder-open",
			"collapsedIcon": "fa-folder",
		}
	];

	public selectedItem:TreeNode[];

	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

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

	public onSelectTaskHandler(e:Event):void
	{
		this.logger.log(this.constructor.name+".onSelectTaskHandler", e);
	}




	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}


type PrimeNGTreeTableType = { data:{name:string},
children:PrimeNGTreeTableType[]}
