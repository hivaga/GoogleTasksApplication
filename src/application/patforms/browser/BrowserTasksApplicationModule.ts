import { AbstractTasksModule } from '../../common/module/AbstractTasksModule';
import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule } from '@angular/core';
import { TasksApplicationComponent } from '../../common/views/TasksApplication/TasksApplicationComponent';
import { BrowserModule } from '@angular/platform-browser';
import { ProviderUtils } from '../../common/utils/ProviderUtils';
import { BrowserConsoleLogger } from './utils/BrowserConsoleLogger';
import { AbstractLogger } from '../../common/services/logger/AbstractLogger';
import { AccordionModule, ButtonModule, SharedModule, TreeModule, TreeTableModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksGroupsList } from '../../common/views/TasksGroupsList/TasksGroupsList';
import { TaskMenu } from '../../common/views/TaskMenu/TaskMenu';
import { AbstractTasksService } from '../../common/services/tasks/AbstractTasksService';
import { GoogleTasksService } from '../../common/services/tasks/google/GoogleTasksService';
import { ConfigurationsModel } from '../../common/models/ConfigurationsModel';
import { TasksModel } from '../../common/models/TasksModel';
import { InitializeTaskServiceCommand } from '../../common/controllers/InitializeTaskServiceCommand';
import { BrowserTaskInitializeTaskServiceCommand } from './controllers/BrowserInitializeGoogleTaskServiceCommand';
import { BrowserInitializeApplicationCommand } from './controllers/BrowserInitializeApplicationCommand';
import { InitializeTasksModelCommand } from '../../common/controllers/InitializeTasksModelCommand';
import { TaskAddGroupButton } from '../../common/views/TaskAddGroupButton/TaskAddGroupButton';
import { TasksCommonModule } from '../../common/TasksCommonModule';

/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 04.06.2017.
 */
@NgModule({
	imports: [
		TasksCommonModule
		],
	providers: [
		ProviderUtils.createClassProvider(AbstractLogger, BrowserConsoleLogger),
		ProviderUtils.createClassProvider(AbstractTasksService, GoogleTasksService),

		ProviderUtils.createClassProvider(BrowserInitializeApplicationCommand, BrowserInitializeApplicationCommand),
		ProviderUtils.createClassProvider(InitializeTaskServiceCommand, BrowserTaskInitializeTaskServiceCommand),
		ProviderUtils.createClassProvider(InitializeTasksModelCommand, InitializeTasksModelCommand),

	],
	bootstrap: [TasksApplicationComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
@Injectable()
export class BrowserTasksApplicationModule extends AbstractTasksModule
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

	constructor(logger: AbstractLogger,
				initializeApplicationCommand:BrowserInitializeApplicationCommand)
	{
		super(logger);

		initializeApplicationCommand.execute();
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
