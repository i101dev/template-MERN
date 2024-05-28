//
import React from "react";
import { Input } from "../../../__PKG__/core/types";
//
//
export default function MyInput(
    label: string,
    initVal: string,
    disabled: boolean,
    type: Input
) {
    //
    //
    const [value, setValue] = React.useState<string | number>("");
    //
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    //
    const component = (
        <div className="form__box">
            <input
                className="form__input"
                onChange={inputHandler}
                placeholder={""}
                disabled={disabled}
                type={type}
                value={value}
            />
            <label className="form__label">{label}</label>
        </div>
    );
    //
    const clear = () => setValue("");
    //
    React.useEffect(() => {
        setValue(initVal ? initVal : "");
    }, []);
    //
    return { value, setValue, component, clear };
}
