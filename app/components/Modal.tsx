import React from 'react'

const Modal = ({ onClick, children, color }: any) => {
    return (
        <div onClick={onClick} style={{color: `${color} !important`}} className="fixed overflow-x-hidden overflow-y-auto flex justify-center items-center top-0 left-0 z-50 bg-[#00000096] w-full h-full">
            {children}
        </div>
    )
}

export default Modal