const lblonline = document.querySelector('#lblonline')
const lbloffline = document.querySelector('#lbloffline')

const txtmensaje=document.querySelector('#txtmensaje')
const btnEnviar=document.querySelector('#btnEnviar')

const socket = io();



socket.on('connect', ()=>{
    console.log("conectado cliente");
    lbloffline.style.display = 'none'
    lblonline.style.display = ''
})

socket.on('disconnect', ()=>{
    console.log("descconectado cliente");
    lbloffline.style.display = ''
    lblonline.style.display = 'none'
})

socket.on('enviar-mensaje', (payload) =>{
    console.log(payload);
})


btnEnviar.addEventListener('click', () =>{
    const mensaje = txtmensaje.value;

    const payload ={
        mensaje,
        id: "12345",
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log("desde el server", id);
    })

})