import React, { useRef, useState } from "react";
import FormPassworld from "../Form/FormPassworld";
import FormName from "../Form/FormName";

const Modal = ({ onClose, model, setUserName }) => {
    const backdrop = useRef(null);

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [chekPassword, setChekPassword] = useState(true);


    const onClick = (e) => {
        if (backdrop.current === e.target) {
            onClose();
        }
    }

    const chekpassword = () => {
        if (password1 === password2) {
            setChekPassword(true)
            onClose();
        } else {
            setChekPassword(false);
        }
    }

    return (

        <div ref={backdrop} onClick={onClick} className="fixed top-0 left-0 flex items-center justify-center h-full w-full bg-black bg-opacity-40 z-20">
            {model === 'Password' && 
                <form className="flex flex-col justify-normal items-center bg-color1 border border-color4 rounded-[16px] w-[280px] h-[280px] animate-scaleIn">
                    <FormPassworld setPassword1={setPassword1} setPassword2={setPassword2} />
                    <div className={` flex flex-col justify-center items-center space-y-[2px] ${!chekPassword ? 'mt-[22px]' : 'mt-[46px]'}`}>
                        {!chekPassword && <h1 className="text-[12px] text-red">Різні паролі, повторіть спробу ще раз</h1>}
                        <button type="button" onClick={chekpassword} className={`flex items-center bg-color2 px-[20px] py-[3px] border-2 border-color4 rounded-[14px] text-color4 text-center text-[16px] font-semibold transition ease-in-out delay-150`}>Зберегти</button>
                    </div>
                </form>
                }
                {model === 'Name' && 
                <form className="flex flex-col justify-normal items-center bg-color1 border border-color4 rounded-[16px] w-[280px] h-[200px] animate-scaleIn">
                    <FormName setUserName={setUserName} />
                    <button type="button" onClick={onClose} className="flex items-center bg-color2 px-[20px] py-[3px] border-2 border-color4 rounded-[14px] mt-[30px] text-color4 text-center text-[16px] font-semibold">Зберегти</button>
                </form>
                }
        </div>

    )
}

export default Modal;