let employee = {
    firstName: 'Jeremy',
    lastName: 'Corbeil'
};
/*let address = {
    street: '2730 sw 13th st',
    city: 'Miami',
    state: 'FL',
    zipCode: '33145'
}
return.employee,addres*/

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
