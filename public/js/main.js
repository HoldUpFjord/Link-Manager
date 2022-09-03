const deleteBtn = document.querySelectorAll('.del')
const tabItem = document.querySelectorAll('span.not')
const tabComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTab)
})

Array.from(tabItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(tabComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTab(){
    const tabId = this.parentNode.dataset.id
    try{
        const response = await fetch('tabs/deleteTab', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'tabIdFromJSFile': tabId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const tabId = this.parentNode.dataset.id
    try{
        const response = await fetch('tabs/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'tabIdFromJSFile': tabId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const tabId = this.parentNode.dataset.id
    try{
        const response = await fetch('tabs/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'tabIdFromJSFile': tabId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}