// Write your solution in this file!

const employee = {
    name: "Tyler",
    streetAddress:  "15 broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value){

    const newEmployee = {...employee};

    newEmployee[key] = value;

    return  newEmployee;
}

//updateEmployeeWithKeyAndValue(employee, "Sam", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key){

    const newEmployee = {...employee};

    delete newEmployee.name;

    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee.name;

    return employee;

}
