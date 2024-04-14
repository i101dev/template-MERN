//
import React from "react";
//
//
export default function MySelect(label: string, options: Array<any>) {
    //
    const [option, setSelectedOption] = React.useState<any>(null);
    //
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };
    //
    // label[0].toUpperCase();
    //
    const compx = (
        <div>
            <div></div>
            <select className="Select H-100" onChange={selectChange}>
                <option value={label}>{label}</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
    //
    return [option, compx];
}
