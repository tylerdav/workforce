import { useEmployees } from "./employeeProvider.js"
import { useComputers } from "./computerProvider.js"
import { useDepartments } from "./departmentProvider.js"
import { useLocations } from "./locationsProvider.js"
import { useCustomers } from "./customerProvider.js"
import { useEmployeeCustomers } from "./employeeCustomerProvider.js"
import Employee from "./employee.js"



const contentTarget = document.querySelector(".employee__computer")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const customerRelationships = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // find employees computer
            const model = computers.find(model => model.id === employee.computerId)
            // find employees department
            const department = departments.find(department => department.id === employee.departmentId)
            // find employees location
            const location = locations.find(location => location.id === employee.locationId)
            // Find all the customer relationships
            const relationships = customerRelationships.filter(employeeCustomer => employeeCustomer.employeeId === employee.id)

            // Find the related customer for each relationship
            const assignedCustomers = relationships.map(rel => {
                const foundCustomers = customers.find(customer => customer.id === rel.id)
                // debugger

                foundCustomers.rate = rel.rate
                foundCustomers.contractLength = rel.contractLength

                return foundCustomers
            })


            const html = Employee(employee, model, department, location, assignedCustomers)
            return html

        }).join("")
    }

    render()
}

export default EmployeeList