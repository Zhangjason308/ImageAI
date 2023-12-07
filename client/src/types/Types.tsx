
export interface CreatePostFormType {
    name: String
    prompt: String
    photo: String
}

export interface FormFieldType {
    labelName: String
    type: String
    name: String
    placeholder: String
    value: String
    handleChange?: any
    isSurpriseMe?: any
    handleSurpriseMe?: any
}