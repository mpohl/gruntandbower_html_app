# Vale Html onfigurator
## Installation

`npm install && bower install`

* installiert alle für node module für Grunt und alle benötigten Js Dateien der App

## Tests  starten

`grunt execute tests`

## Dev Version starten

`grunt serve`
oder
`build dev and serve`

* startet die File Watcher, und öffnet Browser mit der Adresse, die ihr bei der Installation im Gruntfile eingetragen habt
* Der serve Task lädt die Daten aus dem Verzeichnis .tmp für den Browser
* SASS wird automatisch kompiliert von grunt serve. SASS Files einfach in styles Verzeichnis packen, und ggf. in app.scss importieren

## Distribution / Live Version  starten

`grunt serve:dist`
oder
`build dist and serve`
