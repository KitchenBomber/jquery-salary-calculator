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
}
    // let totalMonthly
    // 
    // let totalSalaries = [];
    // employeeInfo.forEach(employeeInfo.annualSalary){
    //     totalSalaries.push(Number(annualSalary));
    //     console.log(totalSalaries);
    // };
    // let empoloyeeSalary = 
    // totalSalaries.push($('#employeeDisplay').find('td.yearlyMoney').html);
    // console.log(totalSalaries);

    // $('#totalOutSpan').append($('#employeeDisplay').get('td.yearlyMoney'));
    // console.log("the monthly expense is", totalYearlyMoney / 12);



    // let el = $('totalOut');
    // el.empty();

    // console.log("in calculateMonthlyExpense");
    // let totalYearlyMoney = 0;
    // let monthlyExpense = totalYearlyMoney / 12;
    // $('#employeeDisplay td').each(function(){
    //     let newExpense = $(this).find('.yearlyMoney').html;
    //     totalYearlyMoney += newExpense;
    // });
    // console.log("the monthly expense is", monthlyExpense);
    // $('#totalOut').append('Total Monthly Expense:', monthlyExpense);
//     console.log("in calculateMonthlyExpense");
// $(.yearlyMoney).each(function(){calculateSum})


//     $('#totalOut').empty();
//     let monthlyExpense = 0;
//     for (const rowValue of $('#employeeDisplay') {

//         monthlyExpense += rowValue;
//         monthlyExpense += $('#theWholeShebang').find(td.yearlyMoney)
//     }

//     monthlyExpense / 12;
//     $('#totalOut').append(monthlyExpense)


