import InvalidParameterValueErrorLocalization__English from "./InvalidParameterValueErrorLocalization__English";


class InvalidParameterValueError extends Error {

  public static readonly NAME: string = "InvalidParameterValueError";
  public static get DEFAULT_TITLE(): string {
    return InvalidParameterValueError.localization.defaultTitle;
  }

  public static localization: InvalidParameterValueError.Localization = InvalidParameterValueErrorLocalization__English;


  public static setLocalization(localization: InvalidParameterValueError.Localization): void {
    InvalidParameterValueError.localization = localization;
  }


  public constructor(parametersObject: InvalidParameterValueError.ConstructorParametersObject) {

    super();

    this.name = InvalidParameterValueError.NAME;

    if ("customMessage" in parametersObject) {
      this.message = parametersObject.customMessage;
    } else {
      this.message = InvalidParameterValueError.localization.generateMessage(parametersObject);
    }
  }
}


namespace InvalidParameterValueError {

  export type ConstructorParametersObject = Localization.GenericDescriptionPartTemplateParameters | { customMessage: string; };

  export type Localization = {
    readonly defaultTitle: string;
    readonly generateMessage: (
      parametersObject: Localization.GenericDescriptionPartTemplateParameters
    ) => string;
  };

  export namespace Localization {
    export type GenericDescriptionPartTemplateParameters = {
      parameterName: string;
      messageSpecificPart?: string;
    };
  }
}


export default InvalidParameterValueError;
