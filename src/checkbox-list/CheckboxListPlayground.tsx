import {GoabCheckbox, GoabCheckboxList } from "@abgov/react-components"
import { GoabCheckboxListOnChangeDetail } from "@abgov/ui-components-common";
import { useState } from "react";


export const CheckboxListPlayground = () => {
    const [basicSelection, setBasicSelection] = useState<string[]>([]);

    function checkboxListOnChange(details: GoabCheckboxListOnChangeDetail) {
        console.log(details);
    }
    return (
        <GoabCheckboxList
            name="basic"
            value={basicSelection}
            onChange={(e) => checkboxListOnChange(e)}
        >
            <GoabCheckbox name="car" text="Car" value="Car" />
            <GoabCheckbox name="bike" text="Bike" value="Bike" />
            <GoabCheckbox name="bus" text="Bus" value="Bus" />
        </GoabCheckboxList>
    )
}
