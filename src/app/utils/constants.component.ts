export class StoreConstants {
  public static readonly LANGUAGE_KEY: string = 'language';
  public static readonly CONFIGURATIONS_KEY: string = 'configurations';
  public static readonly ENTRY_KEY: string = 'entry';
  public static readonly DEFAULT_ENTRY: string = 'defolto';
}


export class PlannerConstants {
  public static readonly STEP_TITLES: string[] = ['app.configurer.stepper.plan', 'app.configurer.stepper.meals', 'app.configurer.stepper.options', 'app.configurer.stepper.finish'];
  public static readonly PLAN_INDEX: number = 0;
  public static readonly MEALS_INDEX: number = 1;
  public static readonly OPTIONS_INDEX: number = 2;
  public static readonly FINISH_INDEX: number = 3;
}


export class LanguageConstants {
  public static readonly EN: string = 'en';
  public static readonly IT: string = 'it';
  public static readonly LANGUAGES: string[] = [LanguageConstants.EN,LanguageConstants.IT];
}