import { defineComponent, h } from "vue";
//除以下写法之外也可以定义组件defineComponent
const MainTable = (props, {
    slots
}) => {
    console.log(props)
    return h(
        "h2",
        ["children"]
    )
}
const MyTable = defineComponent({
    name: "my-table",
    props: {},
    setup(props, {
        slots,
        expose
    }) {
        return () => {
            return h(
                "h1", 
                {
                    class: ["a", "b"],
                    style: {color: '#ccc'},
                },
                [
                    'hello',
                    h("h2", {innerHTML: 'world'}),
                    h(MainTable, {class: 'c'})
                ]
            )
        }
    }
})

export { MyTable };
