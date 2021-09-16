const sizes = {
    xxs: "384px",
    xs: "583.98px",
    sm: "767.98px",
    md: "991.98px",
    lg: "1199.98px",
    xl: "1400px",
    xxl: "1600px"
};

export default {
    up(size) {
        return `@media (min-width: ${sizes[size]})`;
    },
    down(size) {
        return `@media (max-width: ${sizes[size]})`;
    }
};