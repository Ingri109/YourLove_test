
const Head = ({ nameAction }) => {
    const actions = {
        'Cute': [
            'Поцілувати в губи',
            'Поцілувати в щоку',
            'Погладити по голові',
            'Пощупати щочку',
        ],
        'Painful': [
            'Дати підзатильник',
            'Вдарити по щоці',
            'Вкусити за щоку',
            'Вдарити по голові',
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

export default Head;