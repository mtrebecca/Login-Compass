import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AiOutlineDown } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import "../Home/Home.css"
import { useNavigate } from "react-router-dom";


const Home = () => {
    const schema = yup.object({
        name: yup.string().required("Fullname invalid").min(4, 'Invalid name size'),
        email: yup.string().email().required("Email Invalid").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Email Invalid"),
        phone: yup.string()
        .required("Phone Invalid")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        ),
        birthdate: yup.string().matches(/(\d)/, 'Age Invalid'),
        password: yup.string()
        .required('Password Invalid') 
        .min(6, 'Password must be at least 6 characters long').max(9, 'Password must be a maximum of 9 characters')
        .matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Password can only contain Latin letters.'),
        check: yup.bool() 
            .oneOf([true], "You must accept the terms and "),
    
      })
      .required();

const nav = useNavigate();
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
const [check, setCheck] = useState('');
const [birthdate, setBirthdate] = useState('');
const validate = () =>{
    if(email && name && phone && password && check && birthdate){
        navigate("/sucess")
    }
}

const navigate = useNavigate()


const{ register, handleSubmit, watch, formState: { errors } } = useForm({
resolver: yupResolver(schema)

}
);

    return (
        
        <div className="container">
            <div className="block-form">
            
            <form  onSubmit={handleSubmit()}>
                <Header />
            <div className="block cont-one">
                <label htmlFor="nome"><p>Full Name*</p>
                    <input type="text" 
                    placeholder="Name" 
                    id="name" 
                    {...register("name", { required: true })} 
                    onChange={(e)=> setName(e.target.value)}/>
                    {errors.name && <span>{errors.name?.message}</span>}
                </label>
            </div>
        <div className="block all">
            <div className="cont-two">
                <label htmlFor="email" ><p>Email*</p>
                <input type="email" 
                       name="email" 
                       id="email" 
                       placeholder="foo@bar.com"  
                       className="form-control"
                       {...register("email", { required: true })} 
                       onChange={(e)=> setEmail(e.target.value)}     
                       />
                    {errors.email && <span>{errors.email?.message}</span>}
                </label>

                <label htmlFor="password" className="label-two"><p>Password*</p>
                    <input type="password" 
                            name="password"
                            id="password"  
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                
                            }}}
                            {...register("password", { required: true })} 
                            onChange={(e)=> setPassword(e.target.value)}/>
                            {errors.password && <span>{errors.password?.message}</span>}
                </label>       
            </div>
            <div className="cont-three">
                <label htmlFor="phoneNumber"><p>Phone*</p>
                <input  onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            }}} 
                            name="phoneNumber" 
                            type="number" 
                            placeholder="(83) 00000-0000"
                            id="phone"  
                            maxLength="11"
                            {...register("phone", { required: true })} 
                            onChange={(e)=> setPhone(e.target.value)}
                            />
                            {errors.phone && <span>{errors.phone?.message}</span>}
                </label>

                <label htmlFor="birthday" className="label-two"><p>Day*</p>
                {/* <DatePicker
                    selected={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    htmlFor="birthday"
                    maxDate={addMonths(new Date(), 0)}
                    showDisabledMonthNavigation
                    required
                />  */}

        <DatePicker
          type="birthdate"
          name="birthdate"
          id="bitrth"
          placeholderText="yyyy/MM/dd"
          dateFormat="yyyy/MM/dd"
          selected={birthdate}
          onChange={(date) => setBirthdate(date)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          closeOnScroll={true}
          disabledKeyboardNavigation
        />
        <input
          value={birthdate}
          type="hidden"
          
          {...register("birthdate", { required: true })} 
        />
        {errors.birthdate && <span class="span-term">{errors.birthdate?.message}</span>}
                    
                 {/* {errors.birthdate && <span>{errors.birthdate?.message}</span>}        */}
                </label>
            </div></div>
            <div className="cont-four">
                <div className="term">
                    <label htmlFor="check">
                        <input type="checkbox" 
                        id="agree" 
                        {...register("check", { required: true })}
                        onChange={(e)=> setCheck(e.target.value)}
                        />
                        <p className="term-serv">I accept the terms and privacy</p>
                    </label>
                    {errors.check && <span class="span-term">{errors.check?.message}</span>}
                    </div>
                <Footer />
                <div className="footer">
                        <div className="btn-submit">
                            <button type="submit" className="btn-submit" onClick={validate} >Register</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
};


export default Home;