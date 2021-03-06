// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // API_HOSTNAME: 'http://localhost:8080/talk',
  // API_LIST: 'http://localhost:8080/talk' + '/list',
  // API_SHUTDOWN: 'http://localhost:8080/talk' + '/shutdown'
  API_HOSTNAME: 'http://talk-backend-git-source-project.192.168.99.104.nip.io/talk',
  API_LIST: 'http://talk-backend-git-source-project.192.168.99.104.nip.io/talk' + '/list',
  API_SHUTDOWN: 'http://talk-backend-git-source-project.192.168.99.104.nip.io/talk' + '/shutdown'
  // API_HOSTNAME: 'talk-be:8080/talk',
  // API_LIST: 'talk-be:8080/talk' + '/list',
  // API_SHUTDOWN: 'talk-be:8080/talk' + '/shutdown'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
