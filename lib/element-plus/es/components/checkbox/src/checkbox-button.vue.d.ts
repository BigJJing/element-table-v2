import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: () => undefined;
    };
    label: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: undefined;
    };
    trueLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    falseLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    controls: {
        type: StringConstructor;
        default: undefined;
    };
    border: BooleanConstructor;
    size: {
        readonly type: import("vue").PropType<import("../../../utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            default: () => undefined;
        };
        label: {
            type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
        };
        indeterminate: BooleanConstructor;
        disabled: BooleanConstructor;
        checked: BooleanConstructor;
        name: {
            type: StringConstructor;
            default: undefined;
        };
        trueLabel: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        falseLabel: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        id: {
            type: StringConstructor;
            default: undefined;
        };
        controls: {
            type: StringConstructor;
            default: undefined;
        };
        border: BooleanConstructor;
        size: {
            readonly type: import("vue").PropType<import("../../../utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        tabindex: (StringConstructor | NumberConstructor)[];
        validateEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onChange?: ((val: import("./checkbox").CheckboxValueType) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("./checkbox").CheckboxValueType) => any) | undefined;
    }>>;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    focus: import("vue").Ref<boolean>;
    isChecked: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: Event) => void;
    checkboxGroup: import("./checkbox.type").ICheckboxGroupInstance;
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    activeStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: import("./checkbox").CheckboxValueType) => boolean;
    change: (val: import("./checkbox").CheckboxValueType) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: () => undefined;
    };
    label: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: undefined;
    };
    trueLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    falseLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    controls: {
        type: StringConstructor;
        default: undefined;
    };
    border: BooleanConstructor;
    size: {
        readonly type: import("vue").PropType<import("../../../utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((val: import("./checkbox").CheckboxValueType) => any) | undefined;
    "onUpdate:modelValue"?: ((val: import("./checkbox").CheckboxValueType) => any) | undefined;
}, {
    disabled: boolean;
    name: string;
    id: string;
    modelValue: string | number | boolean;
    validateEvent: boolean;
    border: boolean;
    indeterminate: boolean;
    checked: boolean;
    trueLabel: string | number;
    falseLabel: string | number;
    controls: string;
}>;
export default _default;
