import BaseController from "./BaseController";

/**
 * @namespace cl.aquas.developments.templates.zui5tstemplate.controller
 */
export default class App extends BaseController {

	public onInit() : void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
	}

}
