'use strict';

module.exports = function generateClasses(service) {
    const classes = {};
    service.classes.forEach(dotNetClass => {
        classes[dotNetClass.name] = {};
    });
    service.procedures.forEach(procedure => {
        const parts = procedure.name.split('_');
        if (parts.length === 1) {
            return;
        }
        const className = parts[0];
        if (className === 'get' || className === 'set') {
            return;
        }
        if (!classes[className]) {
            throw new Error(`Class '${className}' does not exist`);
        }
        if (parts.length === 3) {
            //todo, getters and setters
            const propertyName = parts[2];
            const accessorName = parts[1];
            classes[className][propertyName] = classes[className][propertyName] || {};
            classes[className][propertyName][accessorName] = procedure.name;
            return;
        }
        classes[className][parts[1]] = procedure.name;
    });
    const result = JSON.stringify(classes, null, 4);
    return 'const classMaps = ' + result;
};
