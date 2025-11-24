import React, { useState } from "react";

const initialValues = {
    name: "",
    email: "",
    password: "",
    country:"",
    gender:"other",
    terms: false
}

function validate(values){
  let errors = {};

  if(!values.name)
    errors['name'] = 'Full name is required';

  if(!values.email)
    errors['email'] = 'Email is required';

  if(!values.password)
    errors['password'] = 'Password is required';

  if(!values.country)
    errors['country'] = 'Country is required';

  if(values.terms === false)
    errors['terms'] = 'Age validation required';

  return errors;
}

export default function RegisterForm() {
    const [data,setData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched,setTouched] = useState({});

    const changeHandler = (e) =>{
        setData((state) => ({
            ...state,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }));
    };

    const submitAction = (e) => {
      const validationErrors = validate(data);
      setErrors(validationErrors);
      setTouched(errors);

      if (Object.keys(validationErrors).length > 0) {
          return;
      }
      setData(initialValues);
      setErrors({});
  }

    const inputClass = (field) => `${errors[field] && touched[field] ? 'border-red-500' : data[field] ? 'border-green-500' : 'border-gray-300'} px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400`;

    const validationHandler = (e) =>{
      setTouched((state)=>({
        ...state,
        [e.target.name]: true
      }));

      const errors = validate(data);
      setErrors(errors);
    }

  return (
    <div className="register-form-animate flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-fuchsia-400 to-blue-400 relative overflow-hidden">
      {/* Floating Blur Effect for Shadow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 h-24 bg-blue-300 blur-3xl opacity-25 pointer-events-none z-0" />
      <form action={submitAction} className="relative z-10 bg-white/90 ring-2 ring-indigo-400/70 shadow-2xl backdrop-blur-xl p-10 md:p-12 rounded-3xl w-full max-w-lg flex flex-col space-y-8">
        <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-600 via-indigo-500 to-blue-500 bg-clip-text text-center mb-2 drop-shadow-lg">Register</h2>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-lg font-bold text-indigo-700">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onBlur={validationHandler}
            placeholder="John Doe"
            className={
              `${inputClass('name')} bg-blue-50/80 border-2 border-indigo-200 focus:border-pink-500 transition placeholder:text-indigo-400 shadow rounded-lg hover:shadow-lg`
            }
          />
          {errors.name && touched.name && <span className="text-red-600 text-sm mt-1">{errors.name}</span>}
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg font-bold text-indigo-700">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onBlur={validationHandler}
            placeholder="you@example.com"
            className={
              `${inputClass('email')} bg-blue-50/80 border-2 border-indigo-200 focus:border-pink-500 transition placeholder:text-indigo-400 shadow rounded-lg hover:shadow-lg`
            }
          />
          {errors.email && touched.email && <span className="text-red-600 text-sm mt-1">{errors.email}</span>}
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-lg font-bold text-indigo-700">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onBlur={validationHandler}
            placeholder="••••••••"
            className={
              `${inputClass('password')} bg-blue-50/80 border-2 border-indigo-200 focus:border-pink-500 transition placeholder:text-indigo-400 shadow rounded-lg hover:shadow-lg`
            }
          />
          {errors.password && touched.password && <span className="text-red-600 text-sm mt-1">{errors.password}</span>}
        </div>

        {/* Dropdown menu for Country */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="country" className="text-lg font-bold text-indigo-700">Country</label>
          <select
            id="country"
            name="country"
            value={data.country}
            onChange={changeHandler}
            onBlur={validationHandler}
            className={
              `${inputClass('country')} bg-blue-50/80 border-2 border-indigo-200 focus:border-pink-500 transition shadow rounded-lg hover:shadow-lg text-indigo-800`
            }
          >
            <option value="">Select a country...</option>
            <option value="us">United States</option>
            <option value="gb">United Kingdom</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
            <option value="other">Other</option>
          </select>
          {errors.country && touched.country && <span className="text-red-600 text-sm mt-1">{errors.country}</span>}
        </div>

        {/* Radio button group for Gender */}
        <div className="flex flex-col space-y-2 pt-3 pb-2">
          <span className="text-lg font-bold text-indigo-700 pb-1">Gender</span>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-1 font-semibold text-indigo-600">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={data.gender === 'male'}
                onChange={changeHandler}
                onBlur={validationHandler}
                className="accent-indigo-500 scale-110 mr-1"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-1 font-semibold text-pink-500">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={data.gender === 'female'}
                onChange={changeHandler}
                onBlur={validationHandler}
                className="accent-pink-400 scale-110 mr-1"
              />
              <span>Female</span>
            </label>
            <label className="flex items-center space-x-1 font-semibold text-blue-600">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={data.gender === 'other'}
                onChange={changeHandler}
                onBlur={validationHandler}
                className="accent-blue-500 scale-110 mr-1"
              />
              <span>Other</span>
            </label>
          </div>
        </div>

        {/* Checkbox for Terms and Conditions */}
        <div className="flex items-center space-x-4 mt-1">
          <input
            id="terms"
            type="checkbox"
            name="terms"
            checked={data.terms}
            onChange={changeHandler}
            onBlur={validationHandler}
            className="accent-pink-500 scale-110 shadow-md"
          />
          <label htmlFor="terms" className="font-semibold text-lg text-blue-600">I am 18 years old or older</label>
        </div>
        {errors.terms && touched.terms && <span className="text-red-600 text-sm mt-1">{errors.terms}</span>}

        <button
          type="submit"
          className="bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500 shadow-xl hover:from-indigo-500 hover:via-pink-600 hover:to-purple-500 focus:ring-4 focus:ring-pink-400 text-white font-bold text-lg py-2 rounded-xl transition-transform duration-200 hover:scale-105 hover:animate-pulse border-none outline-none drop-shadow-xl"
        >
          Register
        </button>
      </form>
    </div>
  );
}
