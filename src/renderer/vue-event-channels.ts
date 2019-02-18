export enum VueEventChannels {
    enterPress = "enter-press",
    openSearchResultLocationKeyPress = "open-search-result-location-key-press",
    handleOpenLocation = "handle-open-location",
    mainWindowHasBeenHidden = "execution-succeeded",
    handleExecution = "handle-execution",
    mainWindowHasBeenShown = "main-window-has-been-shown",
    userInputChange = "my-event",
    userInputHasBeenReset = "user-input-has-been-reset",
    selectNextItem = "select-next-item",
    selectPreviousItem = "select-previous-item",
    searchResultsUpdated = "search-results-updated",
    configUpdated = "config-updated",
    notification = "push-notification",
    showSetting = "show-setting",
    loadingStarted = "loading-started",
    loadingCompleted = "loading-completed",
    appearanceOptionsUpdated = "user-styles-udpated",
    openShortcutEditingModal = "add-new-shortcut-button-clicked",
    shortcutEdited = "shortcut-edited",
    openNewApplicationFolderModal = "open-new-application-folder-modal",
    applicationFolderAdded = "application-folder-added",
    openNewApplicationFileExtensionModal = "open-new-application-file-extension-modal",
    applicationFileExtensionAdded = "application-file-extension-added",
    languageUpdated = "language-updated",
}
