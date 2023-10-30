import React from "react";
import get_started from "../../assets/get-stsarted.png"
import map from "../../assets/map.png"
function FormInput({ label, name, required, horizontal, s }) {
    return (
        <div className={`mb-${horizontal ? '4 w-[50%]' : '6'}`}>
            <label htmlFor={name} className="block text-[#000] font-semibold">
                {label} {required && <span className="text-[#000]">*</span>}
            </label>
            <input
                style={s}
                type="text"
                id={name}
                name={name}
                className={`w-full p-2 border rounded ${horizontal ? 'inline' : 'block'}`}
                required={required}
            />
        </div>
    );
}
function MyForm() {
    return (
        <form className="w-[50%] px-[30px] py-[50px] max-[600px]:w-[100%]">
            <h2 className="text-[50px] font-500 text-[#000]">Contact US</h2>
            <div className="flex w-[100%] gap-2">
                <FormInput label="First Name" name="first_name" required horizontal />
                <FormInput label="Last Name" name="last_name" required horizontal />
            </div>
            <FormInput label="Email" name="email" required horizontal={false} />
            <FormInput label="Message" name="message" s={{ height: 120 }} required={false} horizontal={false} />
            <button className=" text-white p-2 rounded bg-[#f00] mt-[10px] px-[50px] py-[10px]" style={{ float: 'right' }}>
                Submit
            </button>
        </form>
    );
}
const Contact = () => {
    return <div className=" h-[600px] bg-no-repeat bg-cover flex justify-center relative  " style={{ backgroundImage: `url(${get_started})` }}>
        <div className="flex w-[80%] h-[500px] bg-[#fff] absolute top-[200px] rounded-2xl shadow-md max-[600px]:h-[auto] max-[600px]:flex-col max-[600px]:h-[900px]">
            <img className="w-[50%] max-[600px]:w-[100%] h-[45%]" src={map} alt="map_image" style={{ borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} />
            <MyForm />
        </div>

    </div>
}

export default Contact