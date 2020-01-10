import { getEmployees } from "./employeeProvider.js";
import { getComputers } from "./computerProvider.js";
import { getDepartments } from "./departmentProvider.js";
import { getLocations } from "./locationsProvider.js";
import { getCustomers } from "./customerProvider.js";
import { getEmployeeCustomers } from "./employeeCustomerProvider.js";
import EmployeeList from "./employeeList.js";
import CustomerList from "./customerList.js";




getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)
    .then(CustomerList)