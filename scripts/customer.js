const Customer = (customers, employees) => {
    return `
        <section class="customer">
            <header>
                <h3>Customer: ${customers.businessName}</h3>
            </header>
            <div>
                This company has used the following employees.
                <ol>
                    ${
                        employees.map(employees => {
                            // debugger
                            return `<li>${employees.firstName} ${employees.lastName}</li>`
                        }).join("")
                    }
                </ol>
            </div>
        </section>
    `
}

export default Customer