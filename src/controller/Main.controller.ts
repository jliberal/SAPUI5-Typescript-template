import MessageBox from "sap/m/MessageBox";
import BaselineCotroller from "../utils/aquas/baseline/BaselineCotroller";

interface typescriptTest {
	name: string,
	lastname: string	
}

/**
 * @namespace cl.aquas.developments.templates.zui5tstemplate.controller
 */
export default class Main extends BaselineCotroller {

	public sayHello() : void {
		
		this.setScreenModelFromData({
			name: 'Johnplex',
			lastname: 'Stanford'
		})

		const oData:typescriptTest = this.getScreenModelData() as typescriptTest;

		const oData2:typescriptTest = {...oData, lastname:'Stanford United 4P'}


		MessageBox.show(`Hello, ${oData2.name} ${oData2.lastname}!`);
		
	}


}
