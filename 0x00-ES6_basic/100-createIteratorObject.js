export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);

  function* employeeIterator() {
    for (let i = 0; i < departments.length; i++) {
      const department = departments[i];
      for (let j = 0; j < department.length; j++) {
        yield department[j];
      }
    }
  }

  return {
    [Symbol.iterator]: employeeIterator,
  };
}
