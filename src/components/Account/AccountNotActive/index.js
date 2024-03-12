import { useState } from "react";
import ReactDOM from 'react-dom';
import Folder from "../../Home/Folder";
import Modal from "../Modal";



function AccountNotActive() {
    const [opentModalPass, setOpenModalPass] = useState(false);
    const [chekModel, setChekModel] = useState('');

    const IdUser = '000000';
    const Gender = 'Чоловік';
    const birthday = '19.06.2005';
    const email = 'email@gmail.com'
    const [userName, setUserName] = useState('UserName');


    return (
        <>
            <div className=" flex flex-col items-center">
                <div className=" flex flex-col w-[360px] h-[900px] bg-color1 mt-[80px] mb-[100px] rounded-[10px] shadow-[0_15px_30px_7px_rgba(0,0,0,0.35)] lg:w-[1160px] lg:h-[512px] lg:mb-[142px] sm:m-[60px] animate-scaleIn">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col justify-start w-[310px] h-[790px] bg-color5 rounded-[14px] mt-[25px] shadow-[0_5px_10px_3px_rgba(0,0,0,0.5)] lg:flex-row lg:w-[1060px] lg:h-[370px] lg:justify-between ">
                            <div className="basis-0 flex flex-col justify-start items-start ml-[20px] mt-[10px] lg:basis-1/2 lg:mt-[0px]">
                                <div className="flex flex-row space-x-4 mt-[20px]">
                                    <div className="w-[80px] h-[80px] rounded-full bg-white border border-color4"></div>
                                    <div className="flex flex-col justify-start items-start space-y-1">
                                        <h1 className="text-[16px] text-white font-semibold tracking-wide">ID: <span className="text-base text-white font-medium">{IdUser}</span></h1>
                                        <h1 className="text-xl text-white font-semibold tracking-wide">{userName}</h1>
                                    </div>
                                </div>
                                <h2 className="text-[18px] text-white font-semibold tracking-wide mt-[15px]">Email: <span className="text-[18px] text-white font-normal">{email}</span></h2>
                                <h2 className="text-[18px] text-white font-semibold tracking-wide mt-[10px]">Дата народження: <span className="text-[18px] text-white font-normal">{birthday}</span></h2>
                                <h2 className="text-[18px] text-white font-semibold tracking-wide mt-[10px]">Стать: <span className="text-[18px] text-white font-normal">{Gender}</span></h2>
                                <div className="flex flex-col justify-between items-center mt-[32px] space-y-3 lg:flex-row lg:space-x-4 lg:space-y-0 lg:mt-[90px]">
                                    <button onClick={() => { setOpenModalPass(true); setChekModel('Password') }} className="bg-color3 text-white text-[14px] tracking-wide w-[260px] py-[4px] rounded-[14px] shadow-[0_2px_15px_3px_rgba(0,0,0,0.4)] lg:w-[140px] lg:py-[5px] transition delay-100 duration-200 ease-in-out hover:bg-color2 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_4px_15px_8px_rgba(0,0,0,0.35)] ">Змінити пароль</button>
                                    <button onClick={() => { setOpenModalPass(true); setChekModel('Name') }} className="bg-color3 text-white text-[14px] tracking-wide w-[260px] py-[4px] rounded-[14px] shadow-[0_2px_15px_3px_rgba(0,0,0,0.4)] lg:w-[140px] lg:py-[5px] transition delay-100 duration-200 ease-in-out hover:bg-color2 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_4px_15px_8px_rgba(0,0,0,0.35)]">Змінити ім’я</button>
                                    <button onClick={() => { setOpenModalPass(true); setChekModel('Invitation') }} className="bg-color3 text-white text-[14px] tracking-wide w-[260px] py-[4px] rounded-[14px] shadow-[0_2px_15px_3px_rgba(0,0,0,0.4)] lg:w-[140px] lg:py-[5px] transition delay-100 duration-200 ease-in-out hover:bg-color2 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_4px_15px_8px_rgba(0,0,0,0.35)]">Запрошення</button>
                                </div>
                            </div>
                            <div className="basis-0 flex flex-col justify-start items-center mt-[36px] lg:basis-1/2 lg:mt-[30px] ">
                                <p className="text-[12px] text-white font-normal text-balance tracking-normal hyphens-manual text-center ml-[10px] mr-[10px] lg:text-[15px] lg:mr-[30px] lg:ml-[0px] font-Source">Доброго дня, дякую за те що скористувалися нашою інтернет сторінкою, якщо ви хочете добачити <span className="text-color4 font-bold">свого партнера</span> для цікавого проведення спільного часу на цій сторінці будь ласка можете вести <span className="text-color4 font-bold">ID вашого партнера</span>, він знаходиться на сторінці Акаунта його сторінки, після чого натиснути на кнопку <span className="text-color1 font-bold">“Добавити партнера”</span>.
                                    Або прийміть запрошення від вашого партнера натиснувши на кнопку <span className="text-color1 font-bold">“Запрошення”</span>.
                                </p>
                                <p className="text-[9px] text-white font-normal text-wrap tracking-normal hyphens-manual text-center mt-[15px] ml-[10px] mr-[10px] lg:text-[12px] lg:mr-[10px] lg:ml-[0px] font-Source"><span className="text-[11px] text-red font-semibold text-wrap tracking-normal lg:[12px]">ПОПЕРЕДЖЕННЯ: </span>Може бути добавлений лише <span className=" underline underline-offset-4 decoration-white"> одиного партнера</span> , якщо ви хочете його змінити в майбутньому, то потрібно натиснути на кнопку <span className="text-color1">“Покинути партнера”</span>.</p>
                                <div className="flex flex-col justify-center items-start w-[23s0px] space-x-0 space-y-2 mt-[20px] lg:w-[450px] lg:flex-row lg:space-x-4 lg:space-y-0 lg:items-center ">
                                    <h1 className="text-[12px] font-semibold text-white lg:text-[16px] font-Source">ID Користувача</h1>
                                    <input className="bg-color4 text-white rounded-[12px] px-2 py-1 text-wrap "></input>
                                </div>
                                <button className="flex items-center bg-color2 rounded-[16px] py-[5px] px-[20px] text-center mt-[25px] text-white shadow-[0_6px_10px_1px_rgba(0,0,0,0.3)]  transition delay-200 duration-300 ease-in-out hover:bg-color3 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_3px_rgba(0,0,0,0.5)]">Добавити партнера</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end items-end mt-[24px] mr-[20px] lg:mt-[60px]">
                        <button className="bg-color5 py-[5px] px-[20px] border border-color4 rounded-[16px] text-white text-[16px] shadow-[0_3px_10px_3px_rgba(0,0,0,0.35)] transition delay-100 duration-200 ease-in hover:bg-color2 hover:scale-100 hover:-translate-y-0.5 hover:shadow-[0_6px_10px_4px_rgba(0,0,0,0.4)]">Вийти з акаунта</button>
                    </div>
                </div>
            </div>            
            <Folder />

            {opentModalPass &&
                ReactDOM.createPortal(
                    <Modal setUserName={setUserName} model={chekModel} onClose={() => setOpenModalPass(false)} />,
                    document.getElementById('modal-root')
                )}
        </>
    )
}

export default AccountNotActive;