function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const taxRates = {
        0: 0.1,
        12298: 0.15,
        23885: 0.2,
        35473: 0.25,
        47061: 0.3
    };

    const nhifDeductions = {
        0: 150,
        6000: 300,
        8000: 400,
        12000: 500,
        15000: 600,
        20000: 750,
        25000: 850,
        30000: 900,
        35000: 950,
        40000: 1000,
        45000: 1100,
        50000: 1200,
        60000: 1300
    };

    const nssfDeductionRate = 0.06;

    // Calculating gross salary
    const grossSalary = basicSalary + benefits;

    // Calculating PAYE (Tax)
    let payee = 0;
    let taxableIncome = grossSalary - 2400; // 2400 is personal relief
    for (const [threshold, rate] of Object.entries(taxRates)) {
        if (taxableIncome > threshold) {
            payee += (taxableIncome - threshold) * rate;
            taxableIncome = threshold;
        }
    }

    // Calculating NHIF Deductions
    let nhif = 0;
    for (const [threshold, deduction] of Object.entries(nhifDeductions)) {
        if (grossSalary >= threshold) {
            nhif = deduction;
        }
    }

    // Calculating NSSF Deductions
    const nssf = grossSalary * nssfDeductionRate;

    // Calculating Net Salary
    const netSalary = grossSalary - payee - nhif - nssf;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}
   