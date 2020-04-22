export type InputTypes = {
    name: string;
    value?: string;
    type?: "text" | "number" | "email" | "tel" | "password" | "search" | "url" | "textarea";
    label?: string;
    onChange?: ({ name, value }: { name: string; value: string }) => void;
    onBlur?: ({ name, value }: { name: string; value: string }) => void;
};

export type InputErrorTypes = {
    name: string;
    message: string;
};
