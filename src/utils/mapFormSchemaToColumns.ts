import { transformCamelCaseToSentenceCase } from "./transformCamelCaseToSentenceCase";

// tech debt:
// * simplify the logic
// * add types and avoid using "any" type

export const mapFormSchemaToColumns = (schema) => {
    const columns: any[] = [];

    schema.forEach(item => {
        const { label, name } = item;

        if (Array.isArray(name)) {
            columns.push(...mapRangePicketToColumns(name))
        } else {
            columns.push({
                title: label,
                dataIndex: name,
                key: name,
            })
        }
    })

    return columns
}

const mapRangePicketToColumns = (name) => {
    const columns: any[] = [];
    name.forEach((n: string) => (
        columns.push({
            title: transformCamelCaseToSentenceCase(n),
            dataIndex: n,
            key: n,
        })
    ))
    return columns
}