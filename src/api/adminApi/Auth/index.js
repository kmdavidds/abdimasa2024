import { useState } from 'react';
import axios from 'axios';
import API_ENDPOINTS from "../../apiConfig"
import Swal from 'sweetalert2';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    const login = async (id, password) => {
        setLoading(true);
        setError(null);
    
        try {
            const response = await axios.post(API_ENDPOINTS.LOGIN, {
                id: id,
                password: password,
            });
            setToken(response.data.token);
            sessionStorage.setItem('token', response.data.token);
            await Swal.fire({
                icon: 'success',
                title: 'Login Berhasil',
                text: 'Anda berhasil login!',
                confirmButtonText: 'OK'
            });
            window.location.href = '/admin';
        } catch (err) {
            console.error('Error during login:', err);
            setError(err.response ? err.response.data : 'Something went wrong');
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: error || 'Periksa kembali ID dan password Anda.',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error, token };
};

export default useLogin;