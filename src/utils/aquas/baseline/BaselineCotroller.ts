/*
import Controller from "sap/ui/core/mvc/Controller";
import Router from "sap/ui/core/routing/Router";
import UIComponent from "sap/ui/core/UIComponent";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import JSONModel from "sap/ui/model/json/JSONModel";
import Model from "sap/ui/model/Model";

export default abstract class BaselineCotroller extends Controller {

	public getRouter() : Router  {
		return UIComponent.getRouterFor(this);
	}

	public getResourceBundle(): ResourceBundle | Promise<ResourceBundle> {
		const oModel = this.getOwnerComponent().getModel("i18n") as ResourceModel;
		return oModel.getResourceBundle();
	}

	public getScreenModelData(modelName?: string) : object  {
		const oModel:Model = this.getView().getModel(modelName)
    const jModel:JSONModel = oModel as JSONModel
    const oData:object = jModel.getData() as object
    return oData
	}

	public setScreenModelFromData( oData:object, modelName?: string) : void  {
    const jModel:JSONModel = new JSONModel
    jModel.setData(oData)
    const oModel: Model = jModel as Model
    this.getView().setModel(oModel, modelName)
	}
}
*/

import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import AppComponent from "../../../Component";
import Model from "sap/ui/model/Model";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Router from "sap/ui/core/routing/Router";
import History from "sap/ui/core/routing/History";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace cl.aquas.developments.templates.zui5tstemplate.controller
 */
export default abstract class BaselineCotroller extends Controller {

	public getRouter() : Router  {
		return UIComponent.getRouterFor(this);
	}

	public getResourceBundle(): ResourceBundle | Promise<ResourceBundle> {
		const oModel = this.getOwnerComponent().getModel("i18n") as ResourceModel;
		return oModel.getResourceBundle();
	}

	public getScreenModelData(modelName?: string) : object  {
		const oModel:Model = this.getView().getModel(modelName)
    const jModel:JSONModel = oModel as JSONModel
    const oData:object = jModel.getData() as object
    return oData
	}

	public setScreenModelFromData( oData:object, modelName?: string) : void  {
    const jModel:JSONModel = new JSONModel
    jModel.setData(oData)
    const oModel: Model = jModel as Model
    this.getView().setModel(oModel, modelName)
	}

  /**
	 * Convenience method for accessing the component of the controller's view.
	 * @returns Component
	 */
	public getOwnerComponent(): AppComponent {
		return (super.getOwnerComponent() as AppComponent);
	}

	/**
	 * Convenience method for triggering the navigation to a specific target.
	 * @public
	 * @param sName Target name
	 * @param [oParameters] Navigation parameters
	 * @param [bReplace] Defines if the hash should be replaced (no browser history entry) or set (browser history entry)
	 */
	public navTo(sName: string, oParameters?: object, bReplace?: boolean) : void {
		this.getRouter().navTo(sName, oParameters, undefined, bReplace);
	}

	/**
	 * Convenience event handler for navigating back.
	 * It there is a history entry we go one step back in the browser history
	 * If not, it will replace the current entry of the browser history with the main route.
	 */
	public onNavBack(): void {
		const sPreviousHash = History.getInstance().getPreviousHash();
		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			this.getRouter().navTo("main", {}, undefined, true);
		}
	}

}