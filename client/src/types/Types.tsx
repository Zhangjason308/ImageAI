
export interface CreatePostFormType {
    name: string
    prompt: string
    photo: string
}

export interface FormFieldType {
    labelName: string
    type: string
    name: string
    placeholder: string
    value: string
    handleChange?: any
    isSurpriseMe?: any
    handleSurpriseMe?: any
}