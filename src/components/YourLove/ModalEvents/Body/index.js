
const Body = ({ nameAction }) => {
    const actions = {
        'Cute': [
            'Поцілувати',
            'Крепко обняти',
            'Лягти',
        ],
        'Painful': [
            'Вдарит в живіт',
            'Лоскотати',
            'Обняти до задушя',
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

export default Body;