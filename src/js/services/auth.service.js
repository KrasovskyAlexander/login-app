import axios from 'axios';
import API_ENV from '../config/api.config';

export async function login (email,password){
    try{
        const response = await axios.post(`${API_ENV.apiUrl}/auth/login`,JSON.stringify({ email,password }),
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    );
    console.log(response);
    return response.data;
    }catch(err){
        console.log(err);
        return Promise.reject(err);
    }
}

export async function registration (emailReg,passwordReg,firstName,lastName,gender,city,country,day,month,year){
    try{
        const response = await axios.post(`${API_ENV.apiUrl}/auth/signup`,JSON.stringify({ 
            email: emailReg,
            password: passwordReg,
            nickname: 'nickname',
            first_name: firstName,
            last_name: lastName,
            phone: 323435,
            gender_orientation: gender,
            city: city,
            country: country,
            date_of_birth_day: day,
            date_of_birth_month: month,
            date_of_birth_year: year,
         }),
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    );
    console.log(response);
    return response.data;
    }catch(err){
        console.log(err);
        return Promise.reject(err);
    }
}
