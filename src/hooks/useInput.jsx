import { useState } from "react";

export default function useInput (initValue) {

    const [value, setValue] = useState(initValue)

    const onChange = (event) => {
        if(!event) {
            return setValue('')
        } else setValue(event.target.value)
    }

    return {
        value, onChange
    }
}