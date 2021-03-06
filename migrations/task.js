const _ = require('lodash');
const Sequelize = require('sequelize');

module.exports = _.merge({
    taskTitle: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'task_title'
    },
    remind: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        field: 'remind'
    },
    dueDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'due_date'
    },
    attach: {
        type: Sequelize.STRING(200),
        allowNull: true,
        field: 'attach'
    },
    note: {
        type: Sequelize.STRING(200),
        allowNull: true,
        field: 'note'
    },
    status: {
        type: Sequelize.ENUM('Completed', 'Processing'),
        defaultValue: 'Processing'
    },
    isImportant: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        field: 'is_important'
    }
}, _.cloneDeep(require('./base')));