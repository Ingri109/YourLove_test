import React from "react";

const Leg = ({ nameAction }) => {
    const actions = {
        'Cute': [
            'Лягти на ляшку',
            'Легенько шльопнути',
            'Жмякати ляшки',
        ],
        'Painful': [
            'Копнути',
            'Вдрити по жопі',
            'Вкусити за ляшку',
            'Щіпнути',
        ],
        'Lustful': [
            '-------',
            '-------',
            '-------',
            '-------',
        ],
    };

    const actionItems = actions[nameAction] || [];

    return (
        <>
            {actionItems.map((action, index) => (
                <>
                <div key={index} className={`text-center text-[16px] font-semibold text-color4 w-full`}>
                    {action}
                </div>
                { index !== actionItems.length - 1 && <div className="border-t-[3px] border-white w-full"></div>}
                </>
            ))}
        </>
    );
}

export default Leg;