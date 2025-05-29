import {
    GoabFilterChip,
    GoabFormItem,
    GoabInput,
} from "@abgov/react-components";
import {GoabInputOnChangeDetail, GoabInputOnKeyPressDetail} from "@abgov/ui-components-common";
import {useState} from "react";

export const FilterChipThroughTypingExample = () => {
    const [typedChips, setTypedChips] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (detail: GoabInputOnChangeDetail) => {
        const newValue = detail.value.trim();
        setInputValue(newValue);
    };

    const handleInputKeyPress = (detail: GoabInputOnKeyPressDetail) => {
        const newValue = detail.value.trim();
        if (detail.key === "Enter" && newValue !== "") {
            setTypedChips(prevChips => [...prevChips, newValue]);
            setTimeout(() => {
                setInputValue("");
            }, 0);
        } else if (detail.key === "Backspace" && newValue === "" && typedChips.length > 0) {
            setTypedChips(prevChips => prevChips.slice(0, -1));
        }
    };

    const removeTypedChip = (chip: string) => {
        setTypedChips(prevChips => prevChips.filter(c => c !== chip));
    };
    return (
        <>
            <GoabFormItem label="Type to create a chip" mb="m">
                <GoabInput
                    name="chipInput"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    width="100%"
                />
            </GoabFormItem>
            <div>
                {typedChips.length > 0 &&
                    typedChips.map((typedChip, index) => (
                        <GoabFilterChip
                            key={index}
                            content={typedChip}
                            mb="xs"
                            mr="xs"
                            onClick={() => removeTypedChip(typedChip)}
                        />
                    ))}
            </div>
        </>
    )
}
