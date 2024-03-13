function drawSaying() {
fetch('https://v1.hitokoto.cn?&c=d&c=e&c=h&c=i&c=k')
.then(response => response.json())
.then(data => {
    let hitokoto = document.getElementById('saying')
    hitokoto.innerText = data.hitokoto
    
    // hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
    document.getElementById("sayingtype").innerText = '一言（hitokoto）'
    if (data.from_who.length + data.from.length >= 13) data.from = null;
    if (data.from_who != null && data.from != null)
        document.getElementById('sayer').innerText = '——' + data.from_who + '《' + data.from + '》'
    else if (data.from != null)
        document.getElementById('sayer').innerText = '——《' + data.from + '》'
    else if (data.from_who != null)
        document.getElementById('sayer').innerText = '——' + data.from_who
    else {
        document.getElementById('sayer').innerText = ''
        hitokoto.style.textAlign="center"
    }
})
.catch(console.error)
}