// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrlBook: "http://localhost:8085/api/v1/book",
  apiBaseUrlTask: "http://localhost:8085/api/v1/task",
  apiBaseUrlFolder:"http://localhost:8085/api/v1/folder",
  apiBaseUrlJournal: "http://localhost:8085/api/v1/journal",
  apiBaseUrlOKR:"http://localhost:8085/api/v1/okr",
  apiBaseUrlHabit:"http://localhost:8085/api/v1/habit",
  apiBaseUrlGroup:"http://localhost:8085/api/v1/group"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
