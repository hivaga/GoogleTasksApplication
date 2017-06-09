import { AbstractTasksModule } from './module/AbstractTasksModule';
import { AbstractLogger } from './services/logger/AbstractLogger';
import { ProviderUtils } from './utils/ProviderUtils';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule, ButtonModule, SharedModule, TreeModule, TreeTableModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksApplicationComponent } from './views/TasksApplication/TasksApplicationComponent';
import { TasksGroupsList } from './views/TasksGroupsList/TasksGroupsList';
import { TaskMenu } from './views/TaskMenu/TaskMenu';
import { TaskAddGroupButton } from './views/TaskAddGroupButton/TaskAddGroupButton';
import { TasksModel } from './models/TasksModel';
import { ConfigurationsModel } from './models/ConfigurationsModel';
import { NgModule } from '@angular/core';
import { GoogleAuthSignComponent } from './views/GoogleAuthSignComponent/GoogleAuthSignComponent';
import { LoadTaskGroupsCommand } from './controllers/LoadTaskGroupsCommand';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@NgModule({
	imports: [BrowserModule,
		ButtonModule,
		AccordionModule,
		BrowserAnimationsModule,
		TreeTableModule,
		SharedModule,
		TreeModule],
	declarations: [TasksApplicationComponent,
		TasksGroupsList,
		TaskMenu,
		TaskAddGroupButton,
		GoogleAuthSignComponent],
	providers: [
		ProviderUtils.createClassProvider(ConfigurationsModel, ConfigurationsModel),
		ProviderUtils.createClassProvider(TasksModel, TasksModel),

		ProviderUtils.createClassProvider(LoadTaskGroupsCommand,LoadTaskGroupsCommand)
	]

})
export class TasksCommonModule extends AbstractTasksModule
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

	constructor(logger: AbstractLogger)
	{
		super(logger);
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
