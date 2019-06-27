# Personal homepage

This project aims to have a personal home page on GitHub with all the possible  information that you need to present yourself and your projects. It is hackable enough to personalize it as you please.

## Configuration

The configuration is located into `src/config.json` and can be customized in the following way:

| Parameter    | Description
|--------------|-------------
| userName     | The user name where the information will be fetched
| gaTracking   | The tracking ID used by Google Analytics
| includeForks | If the fork repositories should be visible by default
| sortOption   | Sorting behavior. Valid values are `default`, `last-update`, `last-push`, `creation-date`, `forks-count`, `watchers-count`
| orderOption  | Order behavior. Valid values are `asc` or `desc`
