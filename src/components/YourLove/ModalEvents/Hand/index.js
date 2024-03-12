
const Hand = ({ nameAction }) => {
    const actions = {
        'Cute': [
            'Взяти за руку',
            'Обянти за руку',
            'Ніжно щіпнути',
        ],
        'Painful': [
            'Вкусити за палекь',
            'Вкусити за руку',
            'Боляче щіпнути',
            'Вдарити',
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

export default Hand;