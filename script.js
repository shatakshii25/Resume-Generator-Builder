function addNewField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')    
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')  
    newNode.setAttribute('rows', 4)
    newNode.setAttribute('placeholder', "Enter here")
    let weOb = document.getElementById('we') 
    let weAddButtonOb = document.getElementById('weAddButton')
    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')    
    newNode.classList.add('eqField')
    newNode.classList.add('mt-2')  
    newNode.setAttribute('rows', 4 )
    newNode.setAttribute('placeholder', "Enter here")
    let aqOb = document.getElementById('aq') 
    let aqAddButtonOb = document.getElementById('aqAddButton')
    aqOb.insertBefore(newNode, aqAddButtonOb)
}

function addNewPField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')    
    newNode.classList.add('projectField')
    newNode.classList.add('mt-2')  
    newNode.setAttribute('rows', 4)
    newNode.setAttribute('placeholder', "Enter here")
    let pOb = document.getElementById('p') 
    let pAddButtonOb = document.getElementById('ProjectsAddButton')
    pOb.insertBefore(newNode, pAddButtonOb)
}

function generateResume(){
    let nameField = document.getElementById('nameField').value 
    let nameT = document.getElementById('nameT')
    nameT.innerHTML = nameField
    document.getElementById('nameT2').innerHTML = nameField
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value
    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value
    document.getElementById('gitT').innerHTML = document.getElementById('gitField').value
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value
    document.getElementById('weT').innerHTML = document.getElementById('weField').value
    document.getElementById('aqT').innerHTML = document.getElementById('eqField').value
    document.getElementById('pT').innerHTML = document.getElementById('projectField').value
    

    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}

function printCV(){
    window.print();
}



