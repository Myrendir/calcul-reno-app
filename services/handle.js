const hydrateFormData = (formData, query) => {
    Object.entries(query).forEach(([key], [value]) => {
        formData.append(key, value)
    });
}


export default hydrateFormData;