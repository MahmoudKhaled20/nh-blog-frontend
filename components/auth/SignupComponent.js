import { useState, useEffect } from 'react';
import { signup, isAuth } from '../../actions/auth';
import Router from 'next/router';
import { ConnectPlayfabRegisteration} from '../../playfablogin';

const SignupComponent = () => {
    const [values, setValues] = useState({
        name: 'Ryan',
        email: 'ryan@gmail.com',
        password: 'rrrrrr',
        role: 0,
        userType: 0,
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { name, email, password, userType, error, loading, message, showForm } = values;

    useEffect(()=>{
      isAuth() && Router.push(`/`);
    },[]);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { name, email, password, userType };

        signup(user).then(data => {
            console.log(data); 
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                ConnectPlayfabRegisteration(email, password, name);
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    userType: userType,
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        });

    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        value={name}
                        onChange={handleChange('name')}
                        type="text"
                        className="form-control"
                        placeholder="Type your name"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div className="form-group">
                    <select value={userType}
                            onChange={handleChange('userType')}
                            type="userType"
                            className="form-control">

                        <option selected value='0'>Follower</option>
                        <option value= '1'>Guide</option>
                    </select>
                </div>

                <div>
                    <button className="btn btn-primary">Signup</button>
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
        </React.Fragment>
    );
};

export default SignupComponent;
