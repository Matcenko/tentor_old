export default function propOr(object = {}, properties = [], defaultValue = {}) {
    let currentProperty = object;

    for (let i = 0; i < properties.length; i++) {
        if (currentProperty.hasOwnProperty(properties[i])) {
            currentProperty = currentProperty[properties[i]];
        } else return defaultValue
    }
    return currentProperty;
}
