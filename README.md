# Revite

## Description

This is the web client for , which is also available live at [app.transfem.pp.ua](https://app.transfem.pp.ua).

## Pending Rewrite

The following code is pending a partial or full rewrite:

-   `src/components`: components are being migrated to [FrenzyComs/components](https://github.com/FrenzyComs/components)
-   `src/styles`: needs to be migrated to [FrenzyComs/components](https://github.com/FrenzyComs/components)
-   `src/lib`: this needs to be organised

## Stack

-   [Preact](https://preactjs.com/)
-   [Vite](https://vitejs.dev/)

## Submodule Hint

This project contains submodules. Run `git submodule init` after you clone this repository to initialize the submodules.
It is also recommended to run `git submodule update` after you pull from upstream.

## Resources

### Revite

-   [Revite Issue Board](https://github.com/FrenzyComs/revite/issues)
-   [Google Drive Folder with Screenshots](https://drive.google.com/drive/folders/1Ckhl7_9OTTaKzyisrWHzZw1hHj55JwhD)

### 

-   [ Project Board](https://github.com/FrenzyComs//discussions) (Submit feature requests here)
-   [ Testers Server](https://app.transfem.pp.ua/invite/Testers)
-   [Contribution Guide](https://developers.transfem.pp.ua/contributing)

## Quick Start

Get revite up and running locally.

```
git clone --recursive https://github.com/FrenzyComs/revite
cd revite
yarn
yarn build:deps
yarn dev
```

You can now access the client at http://local.transfem.pp.ua:3000.

## CLI Commands

| Command                                 | Description                                  |
| --------------------------------------- | -------------------------------------------- |
| `yarn pull`                             | Setup assets required for Revite.            |
| `yarn dev`                              | Start the  client in development mode. |
| `yarn build`                            | Build the  client.                     |
| `yarn build:deps`                       | Build external dependencies.                 |
| `yarn preview`                          | Start a local server with the built client.  |
| `yarn lint`                             | Run ESLint on the client.                    |
| `yarn fmt`                              | Run Prettier on the client.                  |
| `yarn typecheck`                        | Run TypeScript type checking on the client.  |
| `yarn start`                            | Start a local sirv server with built client. |
| `yarn start:inject`                     | Inject a given API URL and start server.     |
| `yarn lint \| egrep "no-literals" -B 1` | Scan for untranslated strings.               |

## License

Revite is licensed under the [GNU Affero General Public License v3.0](https://github.com/FrenzyComs/revite/blob/master/LICENSE).
