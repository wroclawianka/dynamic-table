import moment from "moment";

export const mapFormDataToEvent = (formData, formSchema) => {
    let event = {}
    formSchema.forEach(({ name }) => {
        if (Array.isArray(name)) {
            event = { ...event, ...mapRangePickerVlues(name, formData) }
        } else {
            event[name] = formData[name];
        }
    })
    return event;
}

const mapRangePickerVlues = (name, formData) => {
    const data = {};
    const property = name.join("_")
    name.forEach((n: string, index: number) => (
        data[n] = moment(formData[property][index]).format('YYYY-MM-DD')
    ))
    return data
}