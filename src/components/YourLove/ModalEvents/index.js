import React, { useRef, useState } from "react";
import Head from "./Head";
import Hand from "./Hand";
import Body from "./Body";
import Leg from "./Leg";

const ModalEvents = ({ name, onClose }) => {
    const backdrop = useRef(null);
    const [isOpen, setIsOpen] = useState(true);
    const [nameAction, setNameAction] = useState('')

    const onClick = (e) => {
        if (backdrop.current === e.target) {
            onClose();
        }
    }

    const bodyParts = {
        'Head': <Head nameAction={nameAction} />,
        'Left Hand': <Hand nameAction={nameAction}/>,
        'Body': <Body nameAction={nameAction}/>,
        'Right Hand': <Hand nameAction={nameAction}/>,
        'Left Leg': <Leg nameAction={nameAction}/>,
        'Right Leg': <Leg nameAction={nameAction}/>,
    };
    const partStyles = {
        'Head': 'ml-[360px] mt-[100px]',
        'Left Hand': 'ml-[280px] mt-[130px]',
        'Body': 'ml-[340px] mt-[160px]',
        'Right Hand': 'ml-[1130px] mt-[140px]',
        'Left Leg': 'ml-[320px] mt-[390px]',
        'Right Leg': 'ml-[1100px] mt-[390px]',
    };

    const partStyle = partStyles[name] || '';

    return (

        <div ref={backdrop} onClick={onClick} className="fixed top-0 left-0 flex items-start justify-center h-full w-full z-30 ">
            <div className={`flex justify-start items-start h-[600px] w-[300px] ${partStyle}`}>

                {isOpen ?
                    <div className=" flex items-center justify-center bg-white py-[4px] px-[4px] border-[3px] border-color5 rounded-[16px] shadow-color5 shadow-[-1px_2px_20px_2px_rgba(0,0,0,0.3)] " >
                        <div className="flex flex-col justify-start items-center space-y-2 bg-color1 py-[6px] w-[150px] rounded-[12px] shadow-[inset_3px_6px_15px_rgba(0,0,0,0.3)]">
                            <div className="text-center text-[16px] font-semibold text-color4 w-full " onClick={() => {setIsOpen(false); setNameAction('Cute')}}>Мілі дії</div>
                            <div className="border-t-[3px] border-white w-full"></div>
                            <div className="text-center text-[16px] font-semibold text-color4 w-full" onClick={() => {setIsOpen(false); setNameAction('Painful')}}>Болючі дії</div>
                            <div className="border-t-[3px] border-white w-full"></div>
                            <div className="text-center text-[16px] font-semibold text-color4 w-full" onClick={() => {setIsOpen(false); setNameAction('Lustful')}}>Хтиві дії</div>
                        </div>
                    </div>
                    :
                    <div className={`flex items-center justify-center bg-white py-[4px] px-[4px] border-[3px] border-color5 rounded-[16px] shadow-color5 shadow-[-1px_2px_20px_2px_rgba(0,0,0,0.3)]`} onClick={() => setIsOpen(false)} >
                        <div className={`flex flex-col justify-start items-center space-y-[8px] py-[7px] bg-color1  w-[180px] rounded-[12px] shadow-[inset_3px_6px_15px_rgba(0,0,0,0.3)]`}>
                            {bodyParts[name]}
                        </div>
                    </div>
                }

            </div>
        </div>

    )
}

export default ModalEvents;