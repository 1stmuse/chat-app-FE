import Swal from 'sweetalert2'

const Taost = Swal.mixin({
    toast:true,
    position:'top-right',
    showConfirmButton:false,
    timer:3000,
    timerProgressBar:true,
    onOpen:(toast)=>{
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const makeToast = (type, msg)=>{
    Taost.fire({
        icon:type,
        title:msg
    })
}

export default makeToast