

function FormName({ setUserName }) {
    return (
        <>
            <h1 className="text-center text-white text-[28px] font-bold tracking-normal mt-[10px]">Змінити ім’я</h1>
            <div className="flex flex-col justify-center space-y-2 mt-[20px]">
                <div className="flex flex-col justify-center items-start space-y-[0.5]px ">
                    <p className="text-center text-white text-[14px] font-bold tracking-tight ml-[10px]">Вести нове ім’я</p>
                    <input type="text" placeholder="New Name" onChange={(e) => setUserName(e.target.value)} className=" bg-color5 border border-color4 rounded-[12px] text-white text-center py-[1px] px-[2px]"></input>
                </div>
            </div>
        </>
    )
}

export default FormName;