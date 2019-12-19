export const SizePropsType = {
    default: null,
    type: [Number, String]
};

export const Color = {
    default: "primary",
    type: String,
    validate: function (value) {
        return ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'translucent'].indexOf(value) !== -1 || value.startsWith("#")
    }
};