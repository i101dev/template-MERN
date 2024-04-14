//
import React from "react";
import { Input } from "../../../__PKG__/core/T";
//
//
export default function MyInput(
    label: string,
    initVal: string,
    disabled: boolean,
    type: Input,
    cls: string = ""
) {
    //
    //
    const [value, setValue] = React.useState<string | number>("");
    //
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    //
    //
    const component = (
        <input
            type={type}
            className={`Input ${cls}`}
            onChange={inputHandler}
            placeholder={label}
            disabled={disabled}
            value={value}
        />
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
