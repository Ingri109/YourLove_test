
function FormPassworld({setPassword1 ,setPassword2}) {
    return (
        <>
            <h1 className="text-center text-white text-[28px] font-bold tracking-normal mt-[10px]">Змінити пароль</h1>
            <div className="flex flex-col justify-center space-y-2 mt-[30px]">
                <div className="flex flex-col justify-center items-start space-y-[0.5]px ">
                    <p className="text-center text-white text-[14px] font-bold tracking-tight ml-[10px]">Ведіть новий пароль</p>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword1(e.target.value)} className=" bg-color5 border border-color4 rounded-[12px] text-white text-center py-[1px] px-[2px]"></input>
                </div>
                <div className="flex flex-col justify-center items-start space-y-[0.5px] ">
                    <p className="text-center text-white text-[14px] font-bold tracking-tight ml-[10px]">Повторіть пароль ще раз</p>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword2(e.target.value)} className=" bg-color5 border border-color4 rounded-[12px] text-white text-center py-[1px] px-[2px]"></input>
                </div>
            </div>

        </>
    )
}

export default FormPassworld;