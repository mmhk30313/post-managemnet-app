import React from 'react';

const MyForm = () => {
    return (
        <div className='p-5 my-2'>
            <form className='form'>
                <div className="form-group">
                    <label className="mx-3" htmlFor="firstName">First Name</label><br/>
                    <input
                        style={{
                            border: 'none',
                            outline: 'none',
                            borderRadius: '10px',
                            width: '550px',
                            height: '50px'
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
                            width: '550px',
                            height: '50px'
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
                            width: '800px',
                            // height: '50px'
                        }}
                        placeholder="Enter your address" name="address" id="address" 
                        className="form-control my-2 shadow" rows={4}>
                    </textarea>
                </div>
                <div className="form-group my-3 position-relative">
                    <label className="mx-3" htmlFor="country">Country</label><br/>
                    <input
                        style={{
                            border: 'none',
                            outline: 'none',
                            borderRadius: '10px',
                            width: '650px',
                            height: '50px'
                        }}
                        className="form-control my-2 shadow"
                        type="text" 
                        placeholder="Enter your country"
                        name="country"
                        id="country"
                        required
                    />
                    <span style={{position: "relative", bottom: '45px', left: '620px'}}><i className="fa fa-search"></i></span>
                </div>
                <div className="form-group my-3">
                    <label className="mx-3" htmlFor="email">Email ID</label><br/>
                    <div className='d-flex align-items-center'>
                        <input
                            style={{
                                border: 'none',
                                outline: 'none',
                                borderRadius: '10px',
                                width: '550px',
                                height: '50px'
                            }}
                            className="form-control my-2 shadow"
                            type="text" 
                            placeholder="example@gmail.com"
                            name="email"
                            id="email"
                            required
                        />
                        <span className="text-center text-danger mx-4 font-weight-bold">Please enter a valid email</span>
                    </div>
                </div>
                <div className="form-group my-3">
                    <label className="mx-3" htmlFor="phoneNumber">Phone Number</label><br/>
                    <div className='d-flex align-items-center'>
                        <input
                            style={{
                                border: 'none',
                                outline: 'none',
                                borderRadius: '10px',
                                width: '80px',
                                height: '50px'
                            }}
                            className="form-control my-2 shadow"
                            type="text" 
                            placeholder="+19"
                            name="CountryCode"
                            id="countryCode"
                            required
                        />
                        <input
                            style={{
                                border: 'none',
                                outline: 'none',
                                borderRadius: '10px',
                                width: '450px',
                                height: '50px'
                            }}
                            className="form-control my-2 mx-3 shadow"
                            type="text" 
                            placeholder="0123456789"
                            name="phoneNumber"
                            id="phoneNumber"
                            required
                        />
                        <span className="text-center text-danger mx-2 font-weight-bold">Please enter a valid phone number</span>
                    </div>
                </div>
                <div className="form-group">
                    <button
                        style={{
                            border: 'none',
                            outline: 'none',
                            borderRadius: '10px',
                            width: '350px',
                            height: '40px',
                            fontWeight: 'bold'
                        }}
                        className="bg-special mx-auto text-center shadow text-light"
                    >Submit</button>

                </div>
            </form>
        </div>
    );
};

export default MyForm;