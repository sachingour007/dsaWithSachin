const employees = [
	{ id: 1, name: "Alice", salary: 5000 },
	{ id: 2, name: "Bob", salary: 7000 },
	{ id: 3, name: "Charlie", salary: 6000 },
	{ id: 4, name: "David", salary: 8000 },
];

/**
 * output
 * { name: "David", salary: 8000 }
 */

function filterHighSalary(employees) {
	const result = employees.reduce((acc, el) => {
		if (el.salary > acc.salary) {
			acc = el;
		}
		return acc;
	}, employees[0]);

	 const {name, salary} =  result;
     
     return {name, salary}
}

console.log(filterHighSalary(employees));
