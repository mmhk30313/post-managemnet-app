import React, { useState } from 'react';
import { isValidEmail, isValidPhoneNumber } from './Checker/checker';

const MyForm = () => {
    const [countryCode, setCountryCode] = useState<string>("+880");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);
    
    return (
        <div className='px-5 py-2'>
            <form className='form mt-4'>
                <div className="form-group">
                    <label className="mx-3" htmlFor="firstName">First Name</label><br/>
                    <input
                        style={{
                            border: 'none',
                            outline: 'none',
                            borderRadius: '10px',
                            width: '60%',
                            // height: '10%'
                        }}
                        className="form-control my-2 shadow"
                        type="text" 
                        placeholder="Enter your first name"
                        name="firstName"
                        id="firstName"
                        required
                    />
                </div>
                <div className="form-group my-3">
                    <label className="mx-3" htmlFor="lastName">Last Name</label><br/>
                    <input
                        style={{
                            border: 'none',
                            outline: 'none',
                            borderRadius: '10px',
                            width: '60%',
                            // height: '50px'
                        }}
                        className="form-control my-2 shadow"
                        type="text" 
                        placeholder="Enter your last name"
                        name="lastName"
                        id="lastName"
                        required
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="address" className="mx-3">Address</label>
                    <textarea
                        style={{
                            border: 'none',
                            outline: 'none',
                            borderRadius: '10px',
                            width: '75%',
                            // height: '50px'
                        }}
                        placeholder="Enter your address" name="address" id="address" 
                        className="form-control my-2 shadow" 
                        rows={3}
                    >
                    </textarea>
                </div>
                <div className="form-group mt-3 position-relative">
                    <label className="mx-3" htmlFor="country">Country</label><br/>
                    <input
                        style={{
                            border: 'none',
                            outline: 'none',
                            borderRadius: '10px',
                            width: '60%',
                            // height: '50px'
                        }}
                        className="form-control my-2 shadow"
                        type="text" 
                        placeholder="Enter your country"
                        name="country"
                        id="country"
                        required
                    />
                    <span style={{position: "relative", bottom: '40px', left: '56%'}} className='m-0 p-0' ><i className="fa fa-search"></i></span>
                </div>
                <div className="form-group mb-1">
                    <label className="mx-3" htmlFor="email">Email ID</label><br/>
                    <div className='d-flex align-items-center'>
                        <input
                            style={{
                                border: 'none',
                                outline: 'none',
                                borderRadius: '10px',
                                width: '60%',
                                // height: '50px'
                            }}
                            className="form-control my-2 shadow"
                            type="email" 
                            placeholder="example@gmail.com"
                            name="email"
                            id="email"
                            onInput={(e:any) => {
                                // console.log({phone: e.target.value})
                                const flag = isValidEmail(e.target.value);
                                // console.log({flagEmail: flag});
                                setIsEmailValid(flag);
                                flag ? setEmail(e.target.value) :  setEmail("");
                            }}
                            required
                        />
                        {
                            !isEmailValid 
                            && <span className="text-center text-danger mx-4 font-weight-bold">Please enter a valid email</span>
                        }
                        
                    </div>
                </div>
                <div className="form-group my-2">
                    <label className="mx-3" htmlFor="phoneNumber">Phone Number</label><br/>
                    <div className='d-flex align-items-center'>
                        <input
                            style={{
                                border: 'none',
                                outline: 'none',
                                borderRadius: '10px',
                                width: '10%',
                                // height: '50px'
                            }}
                            className="form-control my-2 shadow"
                            type="text" 
                            placeholder="+19"
                            name="CountryCode"
                            id="countryCode"
                            defaultValue={countryCode}
                            onInput={(e: any) => setCountryCode(e.target.value)}
                            required
                        />
                        <input
                            style={{
                                border: 'none',
                                outline: 'none',
                                borderRadius: '10px',
                                width: '40%',
                                // height: '50px'
                            }}
                            className="form-control my-2 mx-3 shadow"
                            type="text" 
                            placeholder="0123456789"
                            name="phoneNumber"
                            id="phoneNumber"
                            onInput={(e:any) => {
                                // console.log({phone: e.target.value});
                                const flag = isValidPhoneNumber(e.target.value);
                                // console.log({flagPhone: flag});
                                setIsPhoneValid(flag);
                                flag ? setPhoneNumber(e.target.value) : setPhoneNumber("");
                            }}
                            required
                        />
                        {
                            !isPhoneValid 
                            && <span className="text-center text-danger mx-2 font-weight-bold">Please enter a valid phone number</span>
                        }
                    </div>
                </div>
                <div className="form-group">
                    <button
                        style={{
                            border: 'none',
                            outline: 'none',
                            borderRadius: '10px',
                            width: '30%',
                            height: '35px',
                            fontWeight: 'bold'
                        }}
                        className="bg-special btn mx-auto text-center shadow text-light"
                    >Submit</button>

                </div>
            </form>
        </div>
    );
};

export default MyForm;