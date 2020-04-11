console.log('in client.js');
$(document).ready(onReady);
function onReady() {
    console.log("jquery reporting for duty");
    $('#employeeSubmit').on('click', addEmployee);
    //the button for adding data
    $('#employeeDisplay').on('click', '.deleteRow', function(){
        $(this).closest('tr').remove();
    })
    //the button to remove rows

    
}
let employeeInfo = [];

function addEmployee() {
    console.log('in employeeObjectToAdd');
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
        </tr>`)
}

function calculateMonthlyExpense(){
    console.log("in calculateMonthlyExpense");
    
}

