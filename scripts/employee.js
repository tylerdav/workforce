const Employee = (employees, computers, departments, locations,customers) => {
    return `
        <section class="employee">
            <header>
                <h3>Employee: ${employees.firstName} ${employees.lastName}</h3>
            </header>
                Employee Age: ${employees.age}
            <div>
                Currently using a ${computers.year} ${computers.model}.
            </div>
            <div>
                Works in the ${departments.name}.
            </div>
            <div>
                Works in the ${locations.city} location.
            </div>
            <div>
                Has worked for the following customers.
                <ol>
                    ${
                        customers.map(customer => {
                            // debugger
                            return `<li>${customer.businessName}</li>`
                        }).join("")
                    }
                </ol>
            </div>
        </section>
    `
}

export default Employee
