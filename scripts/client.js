console.log('in client.js');
$(document).ready(onReady);
function onReady() {
    console.log("jquery reporting for duty");
    $('#employeeSubmit').on('click', addEmployee);
}
let employeeInfo = [];
// let employeeObjectToAdd = {
//     firstName: $('#firstNameIn').val,
//     lastName: $('#lastNameIn').val,
//     idNumber: $('#idNumberIn').val,
//     jobTitle: $('#jobTitleIn').val,
//     annualSalary: $('#annSalIn').val,
// }

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
    $('#employeeDisplay').append('<td>')
}

