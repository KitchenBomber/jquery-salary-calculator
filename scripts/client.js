console.log('in client.js');
$(document).ready(onReady);
function onReady() {
    console.log("jquery reporting for duty");
    $('#employeeSubmit').on('click', addEmployee);
    //the button for adding data
    $('#employeeDisplay').on('click', '.deleteRow', function () {
        console.log('removing clicked row');
        $(this).closest('tr').remove();
    })
    //the button to remove rows


}
let employeeInfo = [];

// this function takes the inputs, puts them into an array of objects, pushes that to a table in the DOM and then calls a function to calculate monthly expense
function addEmployee() {
    console.log('in addEmployee');
    let employeeObjectToAdd = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annSalIn').val(),
    }
    console.log(employeeObjectToAdd);
    employeeInfo.push(employeeObjectToAdd);
    console.log(employeeInfo);
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annSalIn').val('');
    $('#employeeDisplay').append(`<tr>
        <td> ${employeeObjectToAdd.firstName} </td>
        <td> ${employeeObjectToAdd.lastName} </td>
        <td> ${employeeObjectToAdd.idNumber} </td>
        <td> ${employeeObjectToAdd.jobTitle} </td>
        <td class=yearlyMoney> ${employeeObjectToAdd.annualSalary} </td>
        <td><button class=deleteRow>Remove</button></td>
        </tr>`);
    calculateMonthlyExpense(employeeInfo);
}
// calculate monthly will be triggered each time an employee is added
function calculateMonthlyExpense(arrayIn) {
    let totalSalaries = 0;
    console.log('in calculateMonthlyExpense');
    for (i = 0; i < arrayIn.length; i++) {
        totalSalaries += Number(arrayIn[i].annualSalary);
    }
    console.log('totalSalaries =', totalSalaries);
    monthlyExpense = totalSalaries / 12;
    $('#totalOutSpan').empty();
    $('#totalOutSpan').append(monthlyExpense);
    if (monthlyExpense > 20000){
        console.log('you went over budget');
        $('#totalOutSpan').addClass('overBudget');
    }
}



