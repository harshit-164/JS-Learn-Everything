// Early Returns

function getGrade(score){
    if (score >= 90 && score <= 100) return "A Grade"
    if (score >= 80 && score <= 90) return "B Grade"
    if (score >= 70 && score <= 80) return "C Grade"
    if (score >= 60 && score <= 70) return "D Grade"
    if (score >= 33 && score <= 59) return "E Grade"
    if (score >= 0 && score <= 33) return "Fail"
    return 'Invalid Input ❌'
}

let score = prompt("Tell Your Total Marks: ")
console.log(getGrade(score))