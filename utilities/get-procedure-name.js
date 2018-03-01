'use strict';
const _ = require('lodash');

module.exports = function getProcedureName(procedure) {
    return _.camelCase(procedure.name);
};
