console.log(import.meta.env.MODE)

const microAppRoutesConfig = [
    {
        name: "vite-sub-one",
        entry:"//localhost:5174",
        container: "#sub-container",
        activeRule: "/sub1",
    },
    {
        name: "vite-sub-two",
        entry:  "//localhost:5175",
        container: "#sub-container",
        activeRule: "/sub2",
    }
]

export default microAppRoutesConfig