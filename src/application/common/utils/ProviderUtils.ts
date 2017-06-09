import { ClassProvider, ExistingProvider, ValueProvider } from '@angular/core';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 04.06.2017.
 */
export class ProviderUtils
{
	// -----------------------------------------
	// STATIC PROPERTIES/METHODS
	// -----------------------------------------

	/* Use this function to get a Value provider object, please do not create manually providers
	 * to avoid code modifications if provider api is changed */
	public static createValueProvider<T>(provide: ConstructorFunctionType<T>, value:any ): ValueProvider
	{
		return {provide: provide, useValue: value};
	}

	/* Use this function to get a Class provider object, please do not create manually providers
	 * to avoid code modifications if provider api is changed */
	public static createClassProvider<T>(provide:any, clazz:ConstructorFunctionType<T>): ClassProvider
	{
		return {provide: provide, useClass: clazz};
	}

	/* Use this function to get a Existing provider object, please do not create manually providers
	 * to avoid code modifications if provider api is changed */
	public static createExistingProvider<T>(provide: any, existingClass: new(...any:any[])=> T): ExistingProvider
	{
		return {provide: provide, useExisting: existingClass};
	}


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

	constructor(params)
	{

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


declare type ConstructorFunctionType<T> = new (...args: any[]) => T;