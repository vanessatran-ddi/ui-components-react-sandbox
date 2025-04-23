import {GoAFilterChip, GoAFormItem, GoAInput} from "@abgov/react-components";
import {useState} from "react";

export const ChipThroughTypingExample = () => {
    const [typedChips, setTypedChips] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (_name: string, value: string) => {
        const newValue = value.trim();
        setInputValue(newValue);
    };

    const handleInputKeyPress = (_name: string, value: string, key: string) => {
        const newValue = value.trim();
        if (key === "Enter" && newValue !== "") {
            setTypedChips(prevChips => [...prevChips, newValue]);
            setTimeout(() => {
                setInputValue("");
            }, 0);
        } else if (key === "Backspace" && newValue === "" && typedChips.length > 0) {
            setTypedChips(prevChips => prevChips.slice(0, -1));
        }
    };

    const removeTypedChip = (chip: string) => {
        setTypedChips(prevChips => prevChips.filter(c => c !== chip));
    };
    return (
        <>
            <GoAFormItem label="Type to create a chip" mb="m">
                <GoAInput
                    name="chipInput"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    width="100%"
                />
            </GoAFormItem>
            <div>
                {typedChips.length > 0 &&
                    typedChips.map((typedChip, index) => (
                        <GoAFilterChip
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
