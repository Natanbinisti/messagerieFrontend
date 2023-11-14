

const baseUrl = "https://b1messenger.imatrythis.tk/"

 const corpsRequeteRegister = {
     username:"natan",
     password : "tropbonlapizza"
 }
 const registerParams = {
         method : 'POST',
         headers : {"Content-type":"application/json"},
         body : JSON.stringify(corpsRequeteRegister)

 }

 fetch(`${baseUrl}register`, registerParams)
     .then(response=>response.json())
     .then(data=> console.log(data))



const corpsRequeteLogin = {
    username:"natan",
     password : "tropbonlapizza"
 }

 const loginParams = {
         method : 'POST',
         headers : {"Content-type":"application/json"},
         body : JSON.stringify(corpsRequeteLogin)

 }

 fetch(`${baseUrl}login`, loginParams)
     .then(response=>response.json())
     .then(data=> console.log(data))
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTk5NzMzNjUsImV4cCI6MTY5OTk3Njk2NSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibmF0YW4ifQ.ZRRtiIrooZGbrMthXWaOxsqYaP2QSaWjWEzDfawD-3dKRDoetJVQ5YShUYMYUTi3pViukjj9NVLnmwKcUdiZo866VxwpryeopR6u8UoPBlUtfGQQ4TkYsigvfsN8H_TxzAfKiR73AOx10Unh0VHBtdMhUbF7-g4rco1P5OsrJ4KIepTc2SMUIJ96EHSyIrxKxsea30STogNZovVRz3DvkDzNeW7Moses8zWetAREw4K8OOkArSpdf2R1KCoQes6VPRSWF_ShA1KBggsD-tg4nmziWuS19wOisB055xfNTrXO9BIyDAx3Wsxm8V1vZwrlT_tpBWg8q-KLH19grnKV2g"


const messagesListParams = {
    method : 'GET',
    headers : {"Content-type":"application/json",
        "Authorization":`Bearer ${token}`},


}

const content = document.querySelector('.content')

async function getMessages()
{
    await fetch(`${baseUrl}api/messages`, messagesListParams)
        .then(response=>response.json())
        .then(data=>{
            return data

        } )
}
function passeLesMEssagesJeLesMEtsDansUnTemplate(messages)
{
    messages.forEach((message)=>{
        content.innerHTML+= `<p>${message.content}</p>`
    })
}

let bouton = document.querySelector()
//bouton.addEventListener('click', ()=>{
  //  getMessages().then(messages =>{
   //     passeLesMEssagesJeLesMEtsDansUnTemplate(messages)
   // })
//})