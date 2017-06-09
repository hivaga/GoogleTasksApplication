import { InitializeTaskServiceCommand } from '../../../common/controllers/InitializeTaskServiceCommand';
import { AbstractTasksService } from '../../../common/services/tasks/AbstractTasksService';
import { AbstractLogger } from '../../../common/services/logger/AbstractLogger';
import { GoogleTasksService } from '../../../common/services/tasks/google/GoogleTasksService';
import { Injectable, NgZone } from '@angular/core';
import { ConfigurationsModel } from '../../../common/models/ConfigurationsModel';
import { InitializeTasksModelCommand } from '../../../common/controllers/InitializeTasksModelCommand';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@Injectable()
export class BrowserTaskInitializeTaskServiceCommand extends InitializeTaskServiceCommand
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

	constructor(taskService: AbstractTasksService,
				logger: AbstractLogger,
				private configurationsModel: ConfigurationsModel,
				private initializeTasksModelCommand: InitializeTasksModelCommand,
				private ngZone: NgZone)
	{
		super(taskService, logger)
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public execute(): void
	{
		super.execute();

		this.taskService.onConnected.add(this.onConnectedHandler, this);

		this.taskService.connect(this.configurationsModel.taksServiceConfigurations.clientID,
			this.configurationsModel.taksServiceConfigurations.discoveryDocs,
			this.configurationsModel.taksServiceConfigurations.scopes,
			this.configurationsModel.taksServiceConfigurations.apiKey);
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------
	private get taskService(): GoogleTasksService
	{
		return this.abstractTaskService as GoogleTasksService;
	}

	private onConnectedHandler(status:boolean, ):void
	{
		this.configurationsModel.signInStatus = status;

		this.logger.model(this.constructor.name+".onConnectedHandler", "this.configurationsModel.signInStatus = ",status);

		this.taskService.onConnected.remove(this.onConnectedHandler, this);

		// probably google api script is out of angular zone
		this.ngZone.run(()=>{});
	}

}
