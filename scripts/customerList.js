import { useEmployees } from "./employeeProvider.js"
import { useCustomers } from "./customerProvider.js"
import { useEmployeeCustomers } from "./employeeCustomerProvider.js"
import Customer from "./customer.js"



const contentTarget = document.querySelector(".customer__employee")

export const CustomerList = () => {
    const employees = useEmployees()
    const customers = useCustomers()
    const customerRelationships = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = customers.map(customer => {

            // Find all the customer relationships
            const relationships = customerRelationships.filter(employeeCustomer => employeeCustomer.customerId === customer.id)

            // Find the related customer for each relationship
            const assignedEmployees = relationships.map(rel => {
                const foundEmployees = employees.find(employee => employee.id === rel.id)
                return foundEmployees
            })


            const html = Customer(customer, assignedEmployees)
            return html

        }).join("")
    }

    render()
}

export default CustomerList