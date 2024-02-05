import { useNavigate, useLocation } from 'react-router-dom';

export const useGoBack = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const goBack = () => {
      navigate(-1);
    };
  
    const isNotHome = location.pathname !== '/';
  
    return {goBack, isNotHome}
  }