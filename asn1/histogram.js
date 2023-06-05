var gradesArray = [];
var histogramArray = [0,0,0,0,0,0,0,0,0,0,0,0];
var criteriaArray = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 0];
//                   Max  A+  A   A-  B+  B   B-  C+  C   C-  D   F
console.log(criteriaArray);

function updateHistogramDisplay() {
  var histogramGrades = document.querySelectorAll(".histogram-grades > br");

  // Iterate over each grade label
  for (var i = 0; i < histogramGrades.length; i++) {
    var gradeElement = histogramGrades[i];
    var gradeCount = histogramArray[i];

    // Clear any existing grade marks
    var nextSibling = gradeElement.nextSibling;
    while (nextSibling && nextSibling.nodeType !== 1) {
      nextSibling = nextSibling.nextSibling;
    }

    while (nextSibling && nextSibling.classList && nextSibling.classList.contains("grade-mark")) {
      gradeElement.parentNode.removeChild(nextSibling);
      nextSibling = gradeElement.nextSibling;
      while (nextSibling && nextSibling.nodeType !== 1) {
        nextSibling = nextSibling.nextSibling;
      }
    }

    // Add grade marks based on the count in histogramArray
    for (var j = 0; j < gradeCount; j++) {
      var oElement = document.createElement("span");
      oElement.textContent = "O";
      oElement.classList.add("grade-mark");
      gradeElement.parentNode.insertBefore(oElement, gradeElement.nextSibling);

      // Add a space after each grade mark
      var spaceElement = document.createElement("span");
      spaceElement.textContent = " ";
      gradeElement.parentNode.insertBefore(spaceElement, gradeElement.nextSibling);
    }
  }
}

// Function to be called when the first submit button is pressed
function pushCriteria() {

    // Get the values from the textboxes and add them to the array
    // I use if statememnts so that the user can modify each element separately
    // Otherwise, when updating only bound, others change to 0
    if (Number(document.getElementById("Max").value) != 0){
        criteriaArray[0]  = Number(document.getElementById("Max").value);
    }
    if (Number(document.getElementById("A+").value) != 0){
        criteriaArray[1]  = Number(document.getElementById("A+").value);
    }
    if (Number(document.getElementById("A").value) != 0){
        criteriaArray[2]  = Number(document.getElementById("A").value);
    }
    if (Number(document.getElementById("A-").value) != 0){
        criteriaArray[3]  = Number(document.getElementById("A-").value);
    }
    if (Number(document.getElementById("B+").value) != 0){
        criteriaArray[4]  = Number(document.getElementById("B+").value);
    }
    if (Number(document.getElementById("B").value) != 0){
        criteriaArray[5]  = Number(document.getElementById("B").value);
    }
    if (Number(document.getElementById("B-").value) != 0){
        criteriaArray[6]  = Number(document.getElementById("B-").value);
    }
    if (Number(document.getElementById("C+").value) != 0){
        criteriaArray[7]  = Number(document.getElementById("C+").value);
    }
    if (Number(document.getElementById("C").value) != 0){
        criteriaArray[8]  = Number(document.getElementById("C").value);
    }
    if (Number(document.getElementById("C-").value) != 0){
        criteriaArray[9]  = Number(document.getElementById("C-").value);
    }
    if (Number(document.getElementById("D").value) != 0){
        criteriaArray[10]  = Number(document.getElementById("D").value);
    }
    if (Number(document.getElementById("F").value) != 0){
        criteriaArray[11]  = Number(document.getElementById("F").value);
    }

  
    updateHistogramDisplay(); // Print the array (you can modify this according to your needs)
  }

function updateHistogramArray(newGrade) {
    
    if (newGrade == criteriaArray[0]) {
        histogramArray[0]++;
    }
    else if (newGrade <= criteriaArray[0] && newGrade > criteriaArray[1]) {
        histogramArray[1]++;
    }
    else if (newGrade <= criteriaArray[1] && newGrade > criteriaArray[2]) {
        histogramArray[2]++;
    }
    else if (newGrade <= criteriaArray[2] && newGrade > criteriaArray[3]) {
        histogramArray[3]++;
    }
    else if (newGrade <= criteriaArray[3] && newGrade > criteriaArray[4]) {
        histogramArray[4]++;
    }
    else if (newGrade <= criteriaArray[4] && newGrade > criteriaArray[5]) {
        histogramArray[5]++;
    }
    else if (newGrade <= criteriaArray[5] && newGrade > criteriaArray[6]) {
        histogramArray[6]++;
    }
    else if (newGrade <= criteriaArray[6] && newGrade > criteriaArray[7]) {
        histogramArray[7]++;
    }
    else if (newGrade <= criteriaArray[7] && newGrade > criteriaArray[8]) {
        histogramArray[8]++;
    }
    else if (newGrade <= criteriaArray[8] && newGrade > criteriaArray[9]) {
        histogramArray[9]++;
    }
    else if (newGrade <= criteriaArray[9] && newGrade > criteriaArray[10]) {
        histogramArray[10]++;
    }
    else if (newGrade <= criteriaArray[10] && newGrade >= criteriaArray[11]) {
        histogramArray[11]++;
    }
    else {
        alert("Error!");
    }

    console.log(histogramArray);
}

function pushGrade() {
    var newGrade = Number(document.getElementById("newGrade").value);
    gradesArray.push(newGrade);
    console.log(gradesArray);
  
    updateHistogramArray(newGrade);
  
    var gradeLabels = document.querySelectorAll(".histogram-grades > br");
    var gradeIndex = criteriaArray.findIndex(function (criteria) {
      return newGrade >= criteria;
    });
  
    if (gradeIndex !== -1) {
      var gradeElement = gradeLabels[gradeIndex];
      var oElement = document.createElement("span");
      oElement.textContent = "O";
      oElement.classList.add("grade-mark");
      gradeElement.parentNode.insertBefore(oElement, gradeElement);
    }
  }
