# Marvel API Redux Character App

> [!NOTE]
> This repository is a retired portfolio project. Its live Marvel data integration is no longer maintained, so the deployed experience has been replaced with a static project page.

## Project history

This application was built as a full-stack learning project using React, Redux, TypeScript, Express, styled-components, Formik, and a custom Webpack toolchain. It explored character search, API-backed views, client-side state management, and responsive component design.

The original source remains in the repository as a record of the implementation and of the engineering practices used at the time. It is not presented as a production-ready starter or an actively supported application.

## Current status

- The production deployment is a dependency-free static legacy page.
- The original API-backed application is retained for historical reference only.
- No API credentials are required or expected.
- Dependencies from the retired runtime have been removed from the active package manifest.
- New feature development will happen in a separate anime discovery project rather than in this codebase.

## Static-site validation

Node.js 20 or newer is recommended.

```bash
npm ci
npm test
```

The validation script checks that the retirement page, Netlify fallback, and deployment configuration are present and that no credential placeholder is needed by the live site.

## Deployment

Netlify is configured by `netlify.toml` to publish the `site` directory without running the retired React/Express application. All routes resolve to the retirement page so old bookmarks such as `/CharacterPage` continue to work.

## Security note

Historical commits contained Marvel API credentials. Any credential that has appeared in public Git history must be treated as compromised and revoked at the provider. Removing a value from the latest commit does not remove it from earlier commits.

Do not add credentials to this repository. If its history is rewritten later, coordinate that operation separately because it changes commit identities and requires force-updating remote references.

## Related work

The next iteration is planned as a separate AniList-first anime discovery and franchise-exploration application. Keeping it separate preserves this project's history while allowing the new application to use a modern architecture without inheriting this repository's retired build system.

## License

ISC

## Contact

[John Fleurimond's portfolio](https://johnfleurimond.com)
