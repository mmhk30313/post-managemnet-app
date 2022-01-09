export const isValidEmail = (email: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export const isValidPhoneNumber = (phoneNumber: string) => {
    if(isNaN(Number(phoneNumber)) || phoneNumber.length > 7 || phoneNumber.length < 7){
        return false;
    }
    return true;
}