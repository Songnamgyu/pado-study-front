import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../actions/user";
import { AppDispatch } from "../store/store";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [nickname, setNickname] = useState("");
    const [checkValid, setChekValid] = useState(false);

    const passwordRef = useRef<HTMLInputElement | null>();

    const dispatch = useDispatch<AppDispatch>();

    const checkPassword = () => {
        if (password === passwordCheck) {
            setChekValid(true);
            return alert("비밀번호가 맞습니다.");
        } else {
            alert("비밀번호가 다릅니다");
            setChekValid(false);
            passwordRef?.current?.focus();
            return;
        }
    };
    const handlerSignUp = () => {
        if (!checkValid) {
            return alert("비밀번호 중복체크를 먼저해주세요");
        }
        const data = {
            email,
            password,
            nickname,
        };
        console.log(data);
        dispatch(signUp(data));
    };

    return (
        <div>
            <div>
                email :
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                password :
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                password 확인 :
                <input
                    ref={passwordRef}
                    type="password"
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                />
                <button onClick={checkPassword}>비밀번호 체크</button>
            </div>
            <div>
                닉네임 :
                <input
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
            </div>
            <button onClick={handlerSignUp}>회원가입</button>
        </div>
    );
};
export default SignUp;
