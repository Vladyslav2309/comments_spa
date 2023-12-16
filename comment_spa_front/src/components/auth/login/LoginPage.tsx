import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ILogin} from "./types";


const LoginPage = () => {

    const navigator = useNavigate();
    const dispatch = useDispatch();

    const initValues: ILogin = {
        email: "",
        password: "",
    };

    return (
        <>
        </>
    )
}

export default LoginPage;
