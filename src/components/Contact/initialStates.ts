export const initialStateValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
};

export const initialStateTouched = (
    value: boolean
): { firstName: boolean; lastName: boolean; email: boolean; subject: boolean; message: boolean } => ({
    firstName: value,
    lastName: value,
    email: value,
    subject: value,
    message: value
});
