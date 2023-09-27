const employee = {
    "name": "kris",
    "streetAddress": "165 main street"
}
function updateEmployeeWithKeyAndValue(object,key,value) {
    const obj = {...object}
    obj[key] = value;
    return obj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value
   return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee
    }
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key]
        return employee
    }
