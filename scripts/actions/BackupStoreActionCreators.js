'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    BackupUtil = require('../utils/BackupUtil'),
    ActionTypes = require('../constants/ActionTypes');

/* istanbul ignore next */
module.exports = {
    getBackups() {
        AppDispatcher.handleViewAction({
            type: ActionTypes.GET_BACKUPS
        });
        BackupUtil.getBackups((err, data) => {
            if(!err) {
                AppDispatcher.handleViewAction({
                    type: ActionTypes.GET_BACKUPS_SUCCESS,
                    data
                });
            } else {
                AppDispatcher.handleViewAction({
                    type: ActionTypes.GET_BACKUPS_FAIL,
                    err
                });
            }
        });
    },
 
    addBackup(backup) {
        AppDispatcher.handleViewAction({
            type: ActionTypes.ADD_BACKUP,
            backup
        });
    },

    restoreFromBackup(index) {
        AppDispatcher.handleViewAction({
            type: ActionTypes.RESTORE_FROM_BACKUP,
            index
        });
    }
};
