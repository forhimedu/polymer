const firstrow = document.getElementById('firstrow');
const secondrow = document.getElementById('secondrow');
const thirdrow = document.getElementById('thirdrow');
const correctAns = document.getElementById('correctAnswers');
const submitButtonWrapper = document.getElementById('submitButtonWrapper');
let returnValue = false;


function toSup(value){
    return value.sup();
}

function toSub(value){
    return value.sub()
}


const allData = [
    ["мақта","өсімдіктекті","табиғи"],
    ["кендір","өсімдіктекті","табиғи"],
    ["жүн","жануартекті","табиғи"],
    ["жібек","жануартекті","табиғи"],
    ["вискоза","жасанды","химиялық"],
    ["мыс-аммиакты ацетат","жасанды","химиялық"],
    ["полиэфирлі лавсан","синтетикалық","химиялық"],
    ["полиамидті капрон","синтетикалық","химиялық"],
    ["полиамидті нейлон","синтетикалық","химиялық"],
    ["полиамидті кевлар","синтетикалық","химиялық"],
]

// allData.forEach(elem => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('answers');
//         let newSpan1 = document.createElement('span')
//         let newSpan2 = document.createElement('span')
//         let newSpan3 = document.createElement('span')
//         newSpan1.innerHTML = elem[0];
//         newDiv.appendChild(newSpan1);
//         newSpan2.innerHTML = elem[1];
//         newDiv.append(newSpan2);
//         newSpan3.innerHTML = elem[2];
//         newDiv.append(newSpan3);
//         correctAns.appendChild(newDiv);
// })


function checkArray(value1, value2, value3, arrayList) {
    returnValue = false;
    arrayList.forEach(element => {
        if (value1 == element[0] && value2 == element[1] && value3 == element[2]) {
            returnValue = true;
        }
    })
    return returnValue;
}



/**

 */
function removeClassName(classNameRemoved, classNameType ) {
    const classRemove = document.querySelectorAll(`.${classNameType}`);
       
    classRemove.forEach(element => {
        if (element.classList.contains("selected")) {
            element.classList.remove("selected")
        }
    })
}

function clearVariables(val1, val2, val3) {
    val1 = null;
    val2 = null;
    val3 = null;
}


function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}

function App() {
    submitButtonWrapper.innerHTML = "";
    const shuffled = allData.sort(() => 0.5 - Math.random());
    let data = shuffled.slice(0, 6);
    /** 
     * Here, each element that is picked from each row will be stored here
     */
    let row1SelectedElement = null;
    let row2SelectedElement = null;
    let row3SelectedElement = null;


    data.forEach(element => {
        // first row related 
        const spanElement1 = document.createElement('span');
        spanElement1.innerHTML = element[0];
        spanElement1.classList.add('card', "rowOne");
        spanElement1.addEventListener('click', () => {
            removeClassName("selected","rowOne");
            spanElement1.classList.add('selected');
            row1SelectedElement = spanElement1.innerHTML;
        })
        firstrow.appendChild(spanElement1);
    })
    shuffleArray(data);
    data.forEach(element => {
        // second row related
        const spanElement2 = document.createElement('span');
        spanElement2.innerHTML = element[1];
        spanElement2.classList.add('card', 'rowTwo');
        spanElement2.addEventListener('click', () => {
            removeClassName('selected', 'rowTwo');
            spanElement2.classList.add('selected');
            row2SelectedElement = spanElement2.innerHTML;
        })
        secondrow.appendChild(spanElement2);
    })
    shuffleArray(data);
    data.forEach(element => {
        // third row related
        const spanElement3 = document.createElement('span');
        spanElement3.innerHTML = element[2];
        spanElement3.classList.add('card', 'rowThree');
        spanElement3.addEventListener('click', () => {
            removeClassName('selected','rowThree');
            spanElement3.classList.add('selected');
            row3SelectedElement = spanElement3.innerHTML;
        })
        thirdrow.appendChild(spanElement3);
    })
    let submitButton = document.createElement('button');
    submitButton.id = 'submitButton';
    submitButton.innerHTML = 'Жауапты қабылда'
    submitButtonWrapper.appendChild(submitButton);
    submitButton.addEventListener('click', () => {
        const removeAllElems = document.querySelectorAll('.selected');
        if (checkArray(row1SelectedElement, row2SelectedElement, row3SelectedElement, data)) {
            // const removeAllElems = document.querySelectorAll('.selected');
            // console.log(removeAllElems);
            removeAllElems.forEach(elem => {
                elem.remove();
            })
        let n = correctAns.childElementCount;
        if (n == 6) {
            correctAns.innerHTML = "";
        } 
        let newDiv = document.createElement('div');
        newDiv.classList.add('answers');
        let newSpan1 = document.createElement('span')
        let newSpan2 = document.createElement('span')
        let newSpan3 = document.createElement('span')
        newSpan1.innerHTML = row1SelectedElement;
        newDiv.appendChild(newSpan1);
        newSpan2.innerHTML = row2SelectedElement;
        newDiv.append(newSpan2);
        newSpan3.innerHTML = row3SelectedElement;
        newDiv.append(newSpan3);
        correctAns.appendChild(newDiv);
 
        } else {
            const removeAllElems = document.querySelectorAll('.selected');
            removeAllElems.forEach(elem => {
              elem.classList.remove('selected');  
            })
        }
        row1SelectedElement = null;
        row2SelectedElement = null;
        row3SelectedElement = null;
        if (firstrow.hasChildNodes()) {
        } else {
            App();
        }
    })
    

}

App();