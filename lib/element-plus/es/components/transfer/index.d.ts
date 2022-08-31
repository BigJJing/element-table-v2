export declare const ElTransfer: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
    readonly titles: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
    readonly buttonTexts: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
    readonly filterPlaceholder: StringConstructor;
    readonly filterMethod: {
        readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly leftDefaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    readonly rightDefaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    readonly renderContent: {
        readonly type: import("vue").PropType<import("./src/transfer").renderContent>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
    readonly filterable: BooleanConstructor;
    readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
        readonly label: "label";
        readonly key: "key";
        readonly disabled: "disabled";
    }>, boolean>;
    readonly targetOrder: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "push" | "unshift" | "original", unknown, "original", boolean>;
    readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
        readonly titles: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
        readonly buttonTexts: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
        readonly filterPlaceholder: StringConstructor;
        readonly filterMethod: {
            readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly leftDefaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
        readonly rightDefaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
        readonly renderContent: {
            readonly type: import("vue").PropType<import("./src/transfer").renderContent>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
        readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
        readonly filterable: BooleanConstructor;
        readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
            readonly label: "label";
            readonly key: "key";
            readonly disabled: "disabled";
        }>, boolean>;
        readonly targetOrder: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "push" | "unshift" | "original", unknown, "original", boolean>;
        readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((value: import("./src/transfer").TransferKey[], direction: import("./src/transfer").TransferDirection, movedKeys: import("./src/transfer").TransferKey[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./src/transfer").TransferKey[]) => any) | undefined;
        "onLeft-check-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
        "onRight-check-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", value: import("./src/transfer").TransferKey[]) => void) & ((event: "change", value: import("./src/transfer").TransferKey[], direction: import("./src/transfer").TransferDirection, movedKeys: import("./src/transfer").TransferKey[]) => void) & ((event: "left-check-change", value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void) & ((event: "right-check-change", value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void);
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    t: import("../..").Translator;
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
    formItem: import("../..").FormItemContext | undefined;
    checkedState: {
        leftChecked: import("./src/transfer").TransferKey[];
        rightChecked: import("./src/transfer").TransferKey[];
    };
    propsAlias: import("vue").ComputedRef<{
        label: string;
        key: string;
        disabled: string;
    }>;
    sourceData: import("vue").ComputedRef<import("./src/transfer").TransferDataItem[]>;
    targetData: import("vue").ComputedRef<import("./src/transfer").TransferDataItem[]>;
    onSourceCheckedChange: (val: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void;
    onTargetCheckedChange: (val: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void;
    addToLeft: () => void;
    addToRight: () => void;
    leftPanel: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly props: import("./src/transfer").TransferPropsAlias;
            readonly data: import("./src/transfer").TransferDataItem[];
            readonly filterable: boolean;
            readonly format: import("./src/transfer").TransferFormat;
            readonly defaultChecked: import("./src/transfer").TransferKey[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
            readonly optionRender: {
                readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: StringConstructor;
            readonly title: StringConstructor;
            readonly filterable: BooleanConstructor;
            readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
            readonly filterMethod: {
                readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
            readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
                readonly label: "label";
                readonly key: "key";
                readonly disabled: "disabled";
            }>, boolean>;
        }>> & {
            "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "props" | "data" | "filterable" | "format" | "defaultChecked">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "checked-change", value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
            readonly optionRender: {
                readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: StringConstructor;
            readonly title: StringConstructor;
            readonly filterable: BooleanConstructor;
            readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
            readonly filterMethod: {
                readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
            readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
                readonly label: "label";
                readonly key: "key";
                readonly disabled: "disabled";
            }>, boolean>;
        }>> & {
            "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
                readonly optionRender: {
                    readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[]>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: StringConstructor;
                readonly title: StringConstructor;
                readonly filterable: BooleanConstructor;
                readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
                readonly filterMethod: {
                    readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
                readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
                    readonly label: "label";
                    readonly key: "key";
                    readonly disabled: "disabled";
                }>, boolean>;
            }>> & {
                "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
            }>>;
            emit: (event: "checked-change", value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void;
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            OptionContent: ({ option }: {
                option: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            t: import("../..").Translator;
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
            panelState: {
                checked: import("./src/transfer").TransferKey[];
                allChecked: boolean;
                query: string;
                inputHover: boolean;
                checkChangeByUser: boolean;
            };
            propsAlias: import("vue").ComputedRef<{
                label: string;
                key: string;
                disabled: string;
            }>;
            filteredData: import("vue").ComputedRef<import("./src/transfer").TransferDataItem[]>;
            checkedSummary: import("vue").ComputedRef<string>;
            isIndeterminate: import("vue").ComputedRef<boolean>;
            handleAllCheckedChange: (value: import("..").CheckboxValueType) => void;
            hasNoMatch: import("vue").ComputedRef<boolean>;
            hasFooter: import("vue").ComputedRef<boolean>;
            checked: import("vue").Ref<import("./src/transfer").TransferKey[]>;
            allChecked: import("vue").Ref<boolean>;
            query: import("vue").Ref<string>;
            inputHover: import("vue").Ref<boolean>;
            isEmpty: (val: unknown) => boolean;
            ElCheckbox: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
                }>>;
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                inputId: import("vue").Ref<string | undefined>;
                isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                isChecked: import("vue").ComputedRef<boolean>;
                isDisabled: import("vue").ComputedRef<boolean>;
                checkboxSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                hasOwnLabel: import("vue").ComputedRef<boolean>;
                model: import("vue").WritableComputedRef<any>;
                handleChange: (e: Event) => void;
                onClickRoot: (e: MouseEvent) => Promise<void>;
                focus: import("vue").Ref<boolean>;
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
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
                change: (val: import("..").CheckboxValueType) => boolean;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
            }>> & {
                CheckboxButton: import("vue").DefineComponent<{
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                        onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                        "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
                    checkboxGroup: import("..").ICheckboxGroupInstance;
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
                    activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
                    change: (val: import("..").CheckboxValueType) => boolean;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
                CheckboxGroup: import("vue").DefineComponent<{
                    modelValue: {
                        type: import("vue").PropType<(string | number)[]>;
                        default: () => never[];
                    };
                    disabled: BooleanConstructor;
                    min: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    max: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    label: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    fill: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    textColor: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    tag: {
                        type: StringConstructor;
                        default: string;
                    };
                    validateEvent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        modelValue: {
                            type: import("vue").PropType<(string | number)[]>;
                            default: () => never[];
                        };
                        disabled: BooleanConstructor;
                        min: {
                            type: NumberConstructor;
                            default: undefined;
                        };
                        max: {
                            type: NumberConstructor;
                            default: undefined;
                        };
                        size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        id: {
                            type: StringConstructor;
                            default: undefined;
                        };
                        label: {
                            type: StringConstructor;
                            default: undefined;
                        };
                        fill: {
                            type: StringConstructor;
                            default: undefined;
                        };
                        textColor: {
                            type: StringConstructor;
                            default: undefined;
                        };
                        tag: {
                            type: StringConstructor;
                            default: string;
                        };
                        validateEvent: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    }>> & {
                        onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                        "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                    }>>;
                    emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
                    elFormItem: import("../..").FormItemContext | undefined;
                    groupId: import("vue").Ref<string | undefined>;
                    isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                    checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
                    changeEvent: (value: import("..").CheckboxValueType[]) => void;
                    modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
                    change: (val: import("..").CheckboxValueType[]) => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    modelValue: {
                        type: import("vue").PropType<(string | number)[]>;
                        default: () => never[];
                    };
                    disabled: BooleanConstructor;
                    min: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    max: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    label: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    fill: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    textColor: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    tag: {
                        type: StringConstructor;
                        default: string;
                    };
                    validateEvent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & {
                    onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                }, {
                    disabled: boolean;
                    label: string;
                    id: string;
                    modelValue: (string | number)[];
                    fill: string;
                    textColor: string;
                    validateEvent: boolean;
                    min: number;
                    max: number;
                    tag: string;
                }>;
            };
            ElCheckboxGroup: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    modelValue: {
                        type: import("vue").PropType<(string | number)[]>;
                        default: () => never[];
                    };
                    disabled: BooleanConstructor;
                    min: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    max: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    label: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    fill: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    textColor: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    tag: {
                        type: StringConstructor;
                        default: string;
                    };
                    validateEvent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & {
                    onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                }>>;
                emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
                elFormItem: import("../..").FormItemContext | undefined;
                groupId: import("vue").Ref<string | undefined>;
                isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
                changeEvent: (value: import("..").CheckboxValueType[]) => void;
                modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
                change: (val: import("..").CheckboxValueType[]) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            }, {
                disabled: boolean;
                label: string;
                id: string;
                modelValue: (string | number)[];
                fill: string;
                textColor: string;
                validateEvent: boolean;
                min: number;
                max: number;
                tag: string;
            }>>;
            ElInput: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }, {
                PENDANT_MAP: {
                    readonly suffix: "append";
                    readonly prefix: "prepend";
                };
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                    readonly resize: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
                    readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                    readonly formatter: {
                        readonly type: import("vue").PropType<Function>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly parser: {
                        readonly type: import("vue").PropType<Function>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly placeholder: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                    readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                    readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                    readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                }>> & {
                    onChange?: ((value: string) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                    onInput?: ((value: string) => any) | undefined;
                    onFocus?: ((evt: FocusEvent) => any) | undefined;
                    onBlur?: ((evt: FocusEvent) => any) | undefined;
                    onClear?: (() => any) | undefined;
                    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                    onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                    onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                    onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                    onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
                }>>;
                emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "clear") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void);
                instance: import("vue").ComponentInternalInstance;
                rawAttrs: {
                    [x: string]: unknown;
                };
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                containerAttrs: import("vue").ComputedRef<Record<string, unknown>>;
                attrs: import("vue").ComputedRef<Record<string, unknown>>;
                form: import("../..").FormContext | undefined;
                formItem: import("../..").FormItemContext | undefined;
                inputId: import("vue").Ref<string | undefined>;
                inputSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                inputDisabled: import("vue").ComputedRef<boolean>;
                nsInput: {
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
                nsTextarea: {
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
                input: import("vue").ShallowRef<HTMLInputElement | undefined>;
                textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
                focused: import("vue").Ref<boolean>;
                hovering: import("vue").Ref<boolean>;
                isComposing: import("vue").Ref<boolean>;
                passwordVisible: import("vue").Ref<boolean>;
                countStyle: import("vue").Ref<import("vue").StyleValue | undefined>;
                textareaCalcStyle: import("vue").ShallowRef<import("vue").StyleValue>;
                _ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
                needStatusIcon: import("vue").ComputedRef<boolean>;
                validateState: import("vue").ComputedRef<"" | "success" | "error" | "validating">;
                validateIcon: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                passwordIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                textareaStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                nativeInputValue: import("vue").ComputedRef<string>;
                showClear: import("vue").ComputedRef<boolean>;
                showPwdVisible: import("vue").ComputedRef<boolean>;
                isWordLimitVisible: import("vue").ComputedRef<boolean>;
                textLength: import("vue").ComputedRef<number>;
                inputExceed: import("vue").ComputedRef<boolean>;
                suffixVisible: import("vue").ComputedRef<boolean>;
                recordCursor: () => void;
                setCursor: () => void;
                resizeTextarea: () => void;
                setNativeInputValue: () => void;
                calcIconOffset: (place: "suffix" | "prefix") => void;
                updateIconOffset: () => void;
                handleInput: (event: Event) => Promise<void>;
                handleChange: (event: Event) => void;
                handleCompositionStart: (event: CompositionEvent) => void;
                handleCompositionUpdate: (event: CompositionEvent) => void;
                handleCompositionEnd: (event: CompositionEvent) => void;
                handlePasswordVisible: () => void;
                focus: () => Promise<void>;
                blur: () => void | undefined;
                handleFocus: (event: FocusEvent) => void;
                handleBlur: (event: FocusEvent) => void;
                handleMouseLeave: (evt: MouseEvent) => void;
                handleMouseEnter: (evt: MouseEvent) => void;
                handleKeydown: (evt: KeyboardEvent) => void;
                select: () => void;
                clear: () => void;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
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
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {}>> & Record<string, any>;
                CircleClose: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                NOOP: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (value: string) => boolean;
                input: (value: string) => boolean;
                change: (value: string) => boolean;
                focus: (evt: FocusEvent) => boolean;
                blur: (evt: FocusEvent) => boolean;
                clear: () => boolean;
                mouseleave: (evt: MouseEvent) => boolean;
                mouseenter: (evt: MouseEvent) => boolean;
                keydown: (evt: Event | KeyboardEvent) => boolean;
                compositionstart: (evt: CompositionEvent) => boolean;
                compositionupdate: (evt: CompositionEvent) => boolean;
                compositionend: (evt: CompositionEvent) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }>> & {
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onInput?: ((value: string) => any) | undefined;
                onFocus?: ((evt: FocusEvent) => any) | undefined;
                onBlur?: ((evt: FocusEvent) => any) | undefined;
                onClear?: (() => any) | undefined;
                onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            }, {
                readonly type: string;
                readonly disabled: boolean;
                readonly label: string;
                readonly id: string;
                readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown>;
                readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly autosize: import("..").InputAutoSize;
                readonly autocomplete: string;
                readonly form: string;
                readonly readonly: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showPassword: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly suffixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
                readonly prefixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
                readonly containerRole: string;
                readonly tabindex: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly inputStyle: import("vue").StyleValue;
            }>> & Record<string, any>;
            Search: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "checked-change": (value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => boolean;
        }, string, {
            readonly props: import("./src/transfer").TransferPropsAlias;
            readonly data: import("./src/transfer").TransferDataItem[];
            readonly filterable: boolean;
            readonly format: import("./src/transfer").TransferFormat;
            readonly defaultChecked: import("./src/transfer").TransferKey[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
        readonly optionRender: {
            readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly placeholder: StringConstructor;
        readonly title: StringConstructor;
        readonly filterable: BooleanConstructor;
        readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
        readonly filterMethod: {
            readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
        readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
            readonly label: "label";
            readonly key: "key";
            readonly disabled: "disabled";
        }>, boolean>;
    }>> & {
        "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
            readonly optionRender: {
                readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: StringConstructor;
            readonly title: StringConstructor;
            readonly filterable: BooleanConstructor;
            readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
            readonly filterMethod: {
                readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
            readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
                readonly label: "label";
                readonly key: "key";
                readonly disabled: "disabled";
            }>, boolean>;
        }>> & {
            "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
        }>>;
        emit: (event: "checked-change", value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        OptionContent: ({ option }: {
            option: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        t: import("../..").Translator;
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
        panelState: {
            checked: import("./src/transfer").TransferKey[];
            allChecked: boolean;
            query: string;
            inputHover: boolean;
            checkChangeByUser: boolean;
        };
        propsAlias: import("vue").ComputedRef<{
            label: string;
            key: string;
            disabled: string;
        }>;
        filteredData: import("vue").ComputedRef<import("./src/transfer").TransferDataItem[]>;
        checkedSummary: import("vue").ComputedRef<string>;
        isIndeterminate: import("vue").ComputedRef<boolean>;
        handleAllCheckedChange: (value: import("..").CheckboxValueType) => void;
        hasNoMatch: import("vue").ComputedRef<boolean>;
        hasFooter: import("vue").ComputedRef<boolean>;
        checked: import("vue").Ref<import("./src/transfer").TransferKey[]>;
        allChecked: import("vue").Ref<boolean>;
        query: import("vue").Ref<string>;
        inputHover: import("vue").Ref<boolean>;
        isEmpty: (val: unknown) => boolean;
        ElCheckbox: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
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
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
            }>>;
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            inputId: import("vue").Ref<string | undefined>;
            isLabeledByFormItem: import("vue").ComputedRef<boolean>;
            isChecked: import("vue").ComputedRef<boolean>;
            isDisabled: import("vue").ComputedRef<boolean>;
            checkboxSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            hasOwnLabel: import("vue").ComputedRef<boolean>;
            model: import("vue").WritableComputedRef<any>;
            handleChange: (e: Event) => void;
            onClickRoot: (e: MouseEvent) => Promise<void>;
            focus: import("vue").Ref<boolean>;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
            change: (val: import("..").CheckboxValueType) => boolean;
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
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
            onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
        }>> & {
            CheckboxButton: import("vue").DefineComponent<{
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
                checkboxGroup: import("..").ICheckboxGroupInstance;
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
                activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
                change: (val: import("..").CheckboxValueType) => boolean;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
            CheckboxGroup: import("vue").DefineComponent<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    modelValue: {
                        type: import("vue").PropType<(string | number)[]>;
                        default: () => never[];
                    };
                    disabled: BooleanConstructor;
                    min: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    max: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    label: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    fill: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    textColor: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    tag: {
                        type: StringConstructor;
                        default: string;
                    };
                    validateEvent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & {
                    onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                }>>;
                emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
                elFormItem: import("../..").FormItemContext | undefined;
                groupId: import("vue").Ref<string | undefined>;
                isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
                changeEvent: (value: import("..").CheckboxValueType[]) => void;
                modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
                change: (val: import("..").CheckboxValueType[]) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            }, {
                disabled: boolean;
                label: string;
                id: string;
                modelValue: (string | number)[];
                fill: string;
                textColor: string;
                validateEvent: boolean;
                min: number;
                max: number;
                tag: string;
            }>;
        };
        ElCheckboxGroup: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            modelValue: {
                type: import("vue").PropType<(string | number)[]>;
                default: () => never[];
            };
            disabled: BooleanConstructor;
            min: {
                type: NumberConstructor;
                default: undefined;
            };
            max: {
                type: NumberConstructor;
                default: undefined;
            };
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            id: {
                type: StringConstructor;
                default: undefined;
            };
            label: {
                type: StringConstructor;
                default: undefined;
            };
            fill: {
                type: StringConstructor;
                default: undefined;
            };
            textColor: {
                type: StringConstructor;
                default: undefined;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            validateEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            }>>;
            emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
            elFormItem: import("../..").FormItemContext | undefined;
            groupId: import("vue").Ref<string | undefined>;
            isLabeledByFormItem: import("vue").ComputedRef<boolean>;
            checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
            changeEvent: (value: import("..").CheckboxValueType[]) => void;
            modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
            change: (val: import("..").CheckboxValueType[]) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<(string | number)[]>;
                default: () => never[];
            };
            disabled: BooleanConstructor;
            min: {
                type: NumberConstructor;
                default: undefined;
            };
            max: {
                type: NumberConstructor;
                default: undefined;
            };
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            id: {
                type: StringConstructor;
                default: undefined;
            };
            label: {
                type: StringConstructor;
                default: undefined;
            };
            fill: {
                type: StringConstructor;
                default: undefined;
            };
            textColor: {
                type: StringConstructor;
                default: undefined;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            validateEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
        }, {
            disabled: boolean;
            label: string;
            id: string;
            modelValue: (string | number)[];
            fill: string;
            textColor: string;
            validateEvent: boolean;
            min: number;
            max: number;
            tag: string;
        }>>;
        ElInput: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
            readonly resize: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
            readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly formatter: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly parser: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
        }, {
            PENDANT_MAP: {
                readonly suffix: "append";
                readonly prefix: "prepend";
            };
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }>> & {
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onInput?: ((value: string) => any) | undefined;
                onFocus?: ((evt: FocusEvent) => any) | undefined;
                onBlur?: ((evt: FocusEvent) => any) | undefined;
                onClear?: (() => any) | undefined;
                onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            }>>;
            emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "clear") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void);
            instance: import("vue").ComponentInternalInstance;
            rawAttrs: {
                [x: string]: unknown;
            };
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            containerAttrs: import("vue").ComputedRef<Record<string, unknown>>;
            attrs: import("vue").ComputedRef<Record<string, unknown>>;
            form: import("../..").FormContext | undefined;
            formItem: import("../..").FormItemContext | undefined;
            inputId: import("vue").Ref<string | undefined>;
            inputSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            inputDisabled: import("vue").ComputedRef<boolean>;
            nsInput: {
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
            nsTextarea: {
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
            input: import("vue").ShallowRef<HTMLInputElement | undefined>;
            textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
            focused: import("vue").Ref<boolean>;
            hovering: import("vue").Ref<boolean>;
            isComposing: import("vue").Ref<boolean>;
            passwordVisible: import("vue").Ref<boolean>;
            countStyle: import("vue").Ref<import("vue").StyleValue | undefined>;
            textareaCalcStyle: import("vue").ShallowRef<import("vue").StyleValue>;
            _ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
            needStatusIcon: import("vue").ComputedRef<boolean>;
            validateState: import("vue").ComputedRef<"" | "success" | "error" | "validating">;
            validateIcon: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            passwordIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            textareaStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            nativeInputValue: import("vue").ComputedRef<string>;
            showClear: import("vue").ComputedRef<boolean>;
            showPwdVisible: import("vue").ComputedRef<boolean>;
            isWordLimitVisible: import("vue").ComputedRef<boolean>;
            textLength: import("vue").ComputedRef<number>;
            inputExceed: import("vue").ComputedRef<boolean>;
            suffixVisible: import("vue").ComputedRef<boolean>;
            recordCursor: () => void;
            setCursor: () => void;
            resizeTextarea: () => void;
            setNativeInputValue: () => void;
            calcIconOffset: (place: "suffix" | "prefix") => void;
            updateIconOffset: () => void;
            handleInput: (event: Event) => Promise<void>;
            handleChange: (event: Event) => void;
            handleCompositionStart: (event: CompositionEvent) => void;
            handleCompositionUpdate: (event: CompositionEvent) => void;
            handleCompositionEnd: (event: CompositionEvent) => void;
            handlePasswordVisible: () => void;
            focus: () => Promise<void>;
            blur: () => void | undefined;
            handleFocus: (event: FocusEvent) => void;
            handleBlur: (event: FocusEvent) => void;
            handleMouseLeave: (evt: MouseEvent) => void;
            handleMouseEnter: (evt: MouseEvent) => void;
            handleKeydown: (evt: KeyboardEvent) => void;
            select: () => void;
            clear: () => void;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
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
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {}>> & Record<string, any>;
            CircleClose: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            NOOP: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: string) => boolean;
            input: (value: string) => boolean;
            change: (value: string) => boolean;
            focus: (evt: FocusEvent) => boolean;
            blur: (evt: FocusEvent) => boolean;
            clear: () => boolean;
            mouseleave: (evt: MouseEvent) => boolean;
            mouseenter: (evt: MouseEvent) => boolean;
            keydown: (evt: Event | KeyboardEvent) => boolean;
            compositionstart: (evt: CompositionEvent) => boolean;
            compositionupdate: (evt: CompositionEvent) => boolean;
            compositionend: (evt: CompositionEvent) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
            readonly resize: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
            readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly formatter: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly parser: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
        }>> & {
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onClear?: (() => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
            onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
        }, {
            readonly type: string;
            readonly disabled: boolean;
            readonly label: string;
            readonly id: string;
            readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown>;
            readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly autosize: import("..").InputAutoSize;
            readonly autocomplete: string;
            readonly form: string;
            readonly readonly: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showPassword: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly suffixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
            readonly prefixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
            readonly containerRole: string;
            readonly tabindex: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly inputStyle: import("vue").StyleValue;
        }>> & Record<string, any>;
        Search: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    rightPanel: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly props: import("./src/transfer").TransferPropsAlias;
            readonly data: import("./src/transfer").TransferDataItem[];
            readonly filterable: boolean;
            readonly format: import("./src/transfer").TransferFormat;
            readonly defaultChecked: import("./src/transfer").TransferKey[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
            readonly optionRender: {
                readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: StringConstructor;
            readonly title: StringConstructor;
            readonly filterable: BooleanConstructor;
            readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
            readonly filterMethod: {
                readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
            readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
                readonly label: "label";
                readonly key: "key";
                readonly disabled: "disabled";
            }>, boolean>;
        }>> & {
            "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "props" | "data" | "filterable" | "format" | "defaultChecked">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "checked-change", value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
            readonly optionRender: {
                readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: StringConstructor;
            readonly title: StringConstructor;
            readonly filterable: BooleanConstructor;
            readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
            readonly filterMethod: {
                readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
            readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
                readonly label: "label";
                readonly key: "key";
                readonly disabled: "disabled";
            }>, boolean>;
        }>> & {
            "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
                readonly optionRender: {
                    readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[]>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: StringConstructor;
                readonly title: StringConstructor;
                readonly filterable: BooleanConstructor;
                readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
                readonly filterMethod: {
                    readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
                readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
                    readonly label: "label";
                    readonly key: "key";
                    readonly disabled: "disabled";
                }>, boolean>;
            }>> & {
                "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
            }>>;
            emit: (event: "checked-change", value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void;
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            OptionContent: ({ option }: {
                option: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            t: import("../..").Translator;
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
            panelState: {
                checked: import("./src/transfer").TransferKey[];
                allChecked: boolean;
                query: string;
                inputHover: boolean;
                checkChangeByUser: boolean;
            };
            propsAlias: import("vue").ComputedRef<{
                label: string;
                key: string;
                disabled: string;
            }>;
            filteredData: import("vue").ComputedRef<import("./src/transfer").TransferDataItem[]>;
            checkedSummary: import("vue").ComputedRef<string>;
            isIndeterminate: import("vue").ComputedRef<boolean>;
            handleAllCheckedChange: (value: import("..").CheckboxValueType) => void;
            hasNoMatch: import("vue").ComputedRef<boolean>;
            hasFooter: import("vue").ComputedRef<boolean>;
            checked: import("vue").Ref<import("./src/transfer").TransferKey[]>;
            allChecked: import("vue").Ref<boolean>;
            query: import("vue").Ref<string>;
            inputHover: import("vue").Ref<boolean>;
            isEmpty: (val: unknown) => boolean;
            ElCheckbox: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
                }>>;
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                inputId: import("vue").Ref<string | undefined>;
                isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                isChecked: import("vue").ComputedRef<boolean>;
                isDisabled: import("vue").ComputedRef<boolean>;
                checkboxSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                hasOwnLabel: import("vue").ComputedRef<boolean>;
                model: import("vue").WritableComputedRef<any>;
                handleChange: (e: Event) => void;
                onClickRoot: (e: MouseEvent) => Promise<void>;
                focus: import("vue").Ref<boolean>;
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
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
                change: (val: import("..").CheckboxValueType) => boolean;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
            }>> & {
                CheckboxButton: import("vue").DefineComponent<{
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                        onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                        "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
                    checkboxGroup: import("..").ICheckboxGroupInstance;
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
                    activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
                    change: (val: import("..").CheckboxValueType) => boolean;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
                CheckboxGroup: import("vue").DefineComponent<{
                    modelValue: {
                        type: import("vue").PropType<(string | number)[]>;
                        default: () => never[];
                    };
                    disabled: BooleanConstructor;
                    min: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    max: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    label: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    fill: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    textColor: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    tag: {
                        type: StringConstructor;
                        default: string;
                    };
                    validateEvent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        modelValue: {
                            type: import("vue").PropType<(string | number)[]>;
                            default: () => never[];
                        };
                        disabled: BooleanConstructor;
                        min: {
                            type: NumberConstructor;
                            default: undefined;
                        };
                        max: {
                            type: NumberConstructor;
                            default: undefined;
                        };
                        size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        id: {
                            type: StringConstructor;
                            default: undefined;
                        };
                        label: {
                            type: StringConstructor;
                            default: undefined;
                        };
                        fill: {
                            type: StringConstructor;
                            default: undefined;
                        };
                        textColor: {
                            type: StringConstructor;
                            default: undefined;
                        };
                        tag: {
                            type: StringConstructor;
                            default: string;
                        };
                        validateEvent: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    }>> & {
                        onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                        "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                    }>>;
                    emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
                    elFormItem: import("../..").FormItemContext | undefined;
                    groupId: import("vue").Ref<string | undefined>;
                    isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                    checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
                    changeEvent: (value: import("..").CheckboxValueType[]) => void;
                    modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
                    change: (val: import("..").CheckboxValueType[]) => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    modelValue: {
                        type: import("vue").PropType<(string | number)[]>;
                        default: () => never[];
                    };
                    disabled: BooleanConstructor;
                    min: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    max: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    label: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    fill: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    textColor: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    tag: {
                        type: StringConstructor;
                        default: string;
                    };
                    validateEvent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & {
                    onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                }, {
                    disabled: boolean;
                    label: string;
                    id: string;
                    modelValue: (string | number)[];
                    fill: string;
                    textColor: string;
                    validateEvent: boolean;
                    min: number;
                    max: number;
                    tag: string;
                }>;
            };
            ElCheckboxGroup: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    modelValue: {
                        type: import("vue").PropType<(string | number)[]>;
                        default: () => never[];
                    };
                    disabled: BooleanConstructor;
                    min: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    max: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    label: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    fill: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    textColor: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    tag: {
                        type: StringConstructor;
                        default: string;
                    };
                    validateEvent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & {
                    onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                }>>;
                emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
                elFormItem: import("../..").FormItemContext | undefined;
                groupId: import("vue").Ref<string | undefined>;
                isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
                changeEvent: (value: import("..").CheckboxValueType[]) => void;
                modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
                change: (val: import("..").CheckboxValueType[]) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            }, {
                disabled: boolean;
                label: string;
                id: string;
                modelValue: (string | number)[];
                fill: string;
                textColor: string;
                validateEvent: boolean;
                min: number;
                max: number;
                tag: string;
            }>>;
            ElInput: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }, {
                PENDANT_MAP: {
                    readonly suffix: "append";
                    readonly prefix: "prepend";
                };
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                    readonly resize: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
                    readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                    readonly formatter: {
                        readonly type: import("vue").PropType<Function>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly parser: {
                        readonly type: import("vue").PropType<Function>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly placeholder: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                    readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                    readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                    readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                }>> & {
                    onChange?: ((value: string) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                    onInput?: ((value: string) => any) | undefined;
                    onFocus?: ((evt: FocusEvent) => any) | undefined;
                    onBlur?: ((evt: FocusEvent) => any) | undefined;
                    onClear?: (() => any) | undefined;
                    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                    onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                    onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                    onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                    onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
                }>>;
                emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "clear") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void);
                instance: import("vue").ComponentInternalInstance;
                rawAttrs: {
                    [x: string]: unknown;
                };
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                containerAttrs: import("vue").ComputedRef<Record<string, unknown>>;
                attrs: import("vue").ComputedRef<Record<string, unknown>>;
                form: import("../..").FormContext | undefined;
                formItem: import("../..").FormItemContext | undefined;
                inputId: import("vue").Ref<string | undefined>;
                inputSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                inputDisabled: import("vue").ComputedRef<boolean>;
                nsInput: {
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
                nsTextarea: {
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
                input: import("vue").ShallowRef<HTMLInputElement | undefined>;
                textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
                focused: import("vue").Ref<boolean>;
                hovering: import("vue").Ref<boolean>;
                isComposing: import("vue").Ref<boolean>;
                passwordVisible: import("vue").Ref<boolean>;
                countStyle: import("vue").Ref<import("vue").StyleValue | undefined>;
                textareaCalcStyle: import("vue").ShallowRef<import("vue").StyleValue>;
                _ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
                needStatusIcon: import("vue").ComputedRef<boolean>;
                validateState: import("vue").ComputedRef<"" | "success" | "error" | "validating">;
                validateIcon: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                passwordIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                textareaStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                nativeInputValue: import("vue").ComputedRef<string>;
                showClear: import("vue").ComputedRef<boolean>;
                showPwdVisible: import("vue").ComputedRef<boolean>;
                isWordLimitVisible: import("vue").ComputedRef<boolean>;
                textLength: import("vue").ComputedRef<number>;
                inputExceed: import("vue").ComputedRef<boolean>;
                suffixVisible: import("vue").ComputedRef<boolean>;
                recordCursor: () => void;
                setCursor: () => void;
                resizeTextarea: () => void;
                setNativeInputValue: () => void;
                calcIconOffset: (place: "suffix" | "prefix") => void;
                updateIconOffset: () => void;
                handleInput: (event: Event) => Promise<void>;
                handleChange: (event: Event) => void;
                handleCompositionStart: (event: CompositionEvent) => void;
                handleCompositionUpdate: (event: CompositionEvent) => void;
                handleCompositionEnd: (event: CompositionEvent) => void;
                handlePasswordVisible: () => void;
                focus: () => Promise<void>;
                blur: () => void | undefined;
                handleFocus: (event: FocusEvent) => void;
                handleBlur: (event: FocusEvent) => void;
                handleMouseLeave: (evt: MouseEvent) => void;
                handleMouseEnter: (evt: MouseEvent) => void;
                handleKeydown: (evt: KeyboardEvent) => void;
                select: () => void;
                clear: () => void;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
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
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {}>> & Record<string, any>;
                CircleClose: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                NOOP: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (value: string) => boolean;
                input: (value: string) => boolean;
                change: (value: string) => boolean;
                focus: (evt: FocusEvent) => boolean;
                blur: (evt: FocusEvent) => boolean;
                clear: () => boolean;
                mouseleave: (evt: MouseEvent) => boolean;
                mouseenter: (evt: MouseEvent) => boolean;
                keydown: (evt: Event | KeyboardEvent) => boolean;
                compositionstart: (evt: CompositionEvent) => boolean;
                compositionupdate: (evt: CompositionEvent) => boolean;
                compositionend: (evt: CompositionEvent) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }>> & {
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onInput?: ((value: string) => any) | undefined;
                onFocus?: ((evt: FocusEvent) => any) | undefined;
                onBlur?: ((evt: FocusEvent) => any) | undefined;
                onClear?: (() => any) | undefined;
                onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            }, {
                readonly type: string;
                readonly disabled: boolean;
                readonly label: string;
                readonly id: string;
                readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown>;
                readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly autosize: import("..").InputAutoSize;
                readonly autocomplete: string;
                readonly form: string;
                readonly readonly: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showPassword: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly suffixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
                readonly prefixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
                readonly containerRole: string;
                readonly tabindex: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly inputStyle: import("vue").StyleValue;
            }>> & Record<string, any>;
            Search: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "checked-change": (value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => boolean;
        }, string, {
            readonly props: import("./src/transfer").TransferPropsAlias;
            readonly data: import("./src/transfer").TransferDataItem[];
            readonly filterable: boolean;
            readonly format: import("./src/transfer").TransferFormat;
            readonly defaultChecked: import("./src/transfer").TransferKey[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
        readonly optionRender: {
            readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly placeholder: StringConstructor;
        readonly title: StringConstructor;
        readonly filterable: BooleanConstructor;
        readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
        readonly filterMethod: {
            readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
        readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
            readonly label: "label";
            readonly key: "key";
            readonly disabled: "disabled";
        }>, boolean>;
    }>> & {
        "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
            readonly optionRender: {
                readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: StringConstructor;
            readonly title: StringConstructor;
            readonly filterable: BooleanConstructor;
            readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
            readonly filterMethod: {
                readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
            readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
                readonly label: "label";
                readonly key: "key";
                readonly disabled: "disabled";
            }>, boolean>;
        }>> & {
            "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
        }>>;
        emit: (event: "checked-change", value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        OptionContent: ({ option }: {
            option: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        t: import("../..").Translator;
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
        panelState: {
            checked: import("./src/transfer").TransferKey[];
            allChecked: boolean;
            query: string;
            inputHover: boolean;
            checkChangeByUser: boolean;
        };
        propsAlias: import("vue").ComputedRef<{
            label: string;
            key: string;
            disabled: string;
        }>;
        filteredData: import("vue").ComputedRef<import("./src/transfer").TransferDataItem[]>;
        checkedSummary: import("vue").ComputedRef<string>;
        isIndeterminate: import("vue").ComputedRef<boolean>;
        handleAllCheckedChange: (value: import("..").CheckboxValueType) => void;
        hasNoMatch: import("vue").ComputedRef<boolean>;
        hasFooter: import("vue").ComputedRef<boolean>;
        checked: import("vue").Ref<import("./src/transfer").TransferKey[]>;
        allChecked: import("vue").Ref<boolean>;
        query: import("vue").Ref<string>;
        inputHover: import("vue").Ref<boolean>;
        isEmpty: (val: unknown) => boolean;
        ElCheckbox: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
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
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
            }>>;
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            inputId: import("vue").Ref<string | undefined>;
            isLabeledByFormItem: import("vue").ComputedRef<boolean>;
            isChecked: import("vue").ComputedRef<boolean>;
            isDisabled: import("vue").ComputedRef<boolean>;
            checkboxSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            hasOwnLabel: import("vue").ComputedRef<boolean>;
            model: import("vue").WritableComputedRef<any>;
            handleChange: (e: Event) => void;
            onClickRoot: (e: MouseEvent) => Promise<void>;
            focus: import("vue").Ref<boolean>;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
            change: (val: import("..").CheckboxValueType) => boolean;
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
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
            onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
        }>> & {
            CheckboxButton: import("vue").DefineComponent<{
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
                checkboxGroup: import("..").ICheckboxGroupInstance;
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
                activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
                change: (val: import("..").CheckboxValueType) => boolean;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
            CheckboxGroup: import("vue").DefineComponent<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    modelValue: {
                        type: import("vue").PropType<(string | number)[]>;
                        default: () => never[];
                    };
                    disabled: BooleanConstructor;
                    min: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    max: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    label: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    fill: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    textColor: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    tag: {
                        type: StringConstructor;
                        default: string;
                    };
                    validateEvent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & {
                    onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                }>>;
                emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
                elFormItem: import("../..").FormItemContext | undefined;
                groupId: import("vue").Ref<string | undefined>;
                isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
                changeEvent: (value: import("..").CheckboxValueType[]) => void;
                modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
                change: (val: import("..").CheckboxValueType[]) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            }, {
                disabled: boolean;
                label: string;
                id: string;
                modelValue: (string | number)[];
                fill: string;
                textColor: string;
                validateEvent: boolean;
                min: number;
                max: number;
                tag: string;
            }>;
        };
        ElCheckboxGroup: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            modelValue: {
                type: import("vue").PropType<(string | number)[]>;
                default: () => never[];
            };
            disabled: BooleanConstructor;
            min: {
                type: NumberConstructor;
                default: undefined;
            };
            max: {
                type: NumberConstructor;
                default: undefined;
            };
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            id: {
                type: StringConstructor;
                default: undefined;
            };
            label: {
                type: StringConstructor;
                default: undefined;
            };
            fill: {
                type: StringConstructor;
                default: undefined;
            };
            textColor: {
                type: StringConstructor;
                default: undefined;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            validateEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            }>>;
            emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
            elFormItem: import("../..").FormItemContext | undefined;
            groupId: import("vue").Ref<string | undefined>;
            isLabeledByFormItem: import("vue").ComputedRef<boolean>;
            checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
            changeEvent: (value: import("..").CheckboxValueType[]) => void;
            modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
            change: (val: import("..").CheckboxValueType[]) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<(string | number)[]>;
                default: () => never[];
            };
            disabled: BooleanConstructor;
            min: {
                type: NumberConstructor;
                default: undefined;
            };
            max: {
                type: NumberConstructor;
                default: undefined;
            };
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            id: {
                type: StringConstructor;
                default: undefined;
            };
            label: {
                type: StringConstructor;
                default: undefined;
            };
            fill: {
                type: StringConstructor;
                default: undefined;
            };
            textColor: {
                type: StringConstructor;
                default: undefined;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            validateEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
        }, {
            disabled: boolean;
            label: string;
            id: string;
            modelValue: (string | number)[];
            fill: string;
            textColor: string;
            validateEvent: boolean;
            min: number;
            max: number;
            tag: string;
        }>>;
        ElInput: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
            readonly resize: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
            readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly formatter: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly parser: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
        }, {
            PENDANT_MAP: {
                readonly suffix: "append";
                readonly prefix: "prepend";
            };
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }>> & {
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onInput?: ((value: string) => any) | undefined;
                onFocus?: ((evt: FocusEvent) => any) | undefined;
                onBlur?: ((evt: FocusEvent) => any) | undefined;
                onClear?: (() => any) | undefined;
                onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            }>>;
            emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "clear") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void);
            instance: import("vue").ComponentInternalInstance;
            rawAttrs: {
                [x: string]: unknown;
            };
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            containerAttrs: import("vue").ComputedRef<Record<string, unknown>>;
            attrs: import("vue").ComputedRef<Record<string, unknown>>;
            form: import("../..").FormContext | undefined;
            formItem: import("../..").FormItemContext | undefined;
            inputId: import("vue").Ref<string | undefined>;
            inputSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            inputDisabled: import("vue").ComputedRef<boolean>;
            nsInput: {
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
            nsTextarea: {
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
            input: import("vue").ShallowRef<HTMLInputElement | undefined>;
            textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
            focused: import("vue").Ref<boolean>;
            hovering: import("vue").Ref<boolean>;
            isComposing: import("vue").Ref<boolean>;
            passwordVisible: import("vue").Ref<boolean>;
            countStyle: import("vue").Ref<import("vue").StyleValue | undefined>;
            textareaCalcStyle: import("vue").ShallowRef<import("vue").StyleValue>;
            _ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
            needStatusIcon: import("vue").ComputedRef<boolean>;
            validateState: import("vue").ComputedRef<"" | "success" | "error" | "validating">;
            validateIcon: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            passwordIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            textareaStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            nativeInputValue: import("vue").ComputedRef<string>;
            showClear: import("vue").ComputedRef<boolean>;
            showPwdVisible: import("vue").ComputedRef<boolean>;
            isWordLimitVisible: import("vue").ComputedRef<boolean>;
            textLength: import("vue").ComputedRef<number>;
            inputExceed: import("vue").ComputedRef<boolean>;
            suffixVisible: import("vue").ComputedRef<boolean>;
            recordCursor: () => void;
            setCursor: () => void;
            resizeTextarea: () => void;
            setNativeInputValue: () => void;
            calcIconOffset: (place: "suffix" | "prefix") => void;
            updateIconOffset: () => void;
            handleInput: (event: Event) => Promise<void>;
            handleChange: (event: Event) => void;
            handleCompositionStart: (event: CompositionEvent) => void;
            handleCompositionUpdate: (event: CompositionEvent) => void;
            handleCompositionEnd: (event: CompositionEvent) => void;
            handlePasswordVisible: () => void;
            focus: () => Promise<void>;
            blur: () => void | undefined;
            handleFocus: (event: FocusEvent) => void;
            handleBlur: (event: FocusEvent) => void;
            handleMouseLeave: (evt: MouseEvent) => void;
            handleMouseEnter: (evt: MouseEvent) => void;
            handleKeydown: (evt: KeyboardEvent) => void;
            select: () => void;
            clear: () => void;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
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
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {}>> & Record<string, any>;
            CircleClose: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            NOOP: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: string) => boolean;
            input: (value: string) => boolean;
            change: (value: string) => boolean;
            focus: (evt: FocusEvent) => boolean;
            blur: (evt: FocusEvent) => boolean;
            clear: () => boolean;
            mouseleave: (evt: MouseEvent) => boolean;
            mouseenter: (evt: MouseEvent) => boolean;
            keydown: (evt: Event | KeyboardEvent) => boolean;
            compositionstart: (evt: CompositionEvent) => boolean;
            compositionupdate: (evt: CompositionEvent) => boolean;
            compositionend: (evt: CompositionEvent) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
            readonly resize: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
            readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly formatter: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly parser: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
        }>> & {
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onClear?: (() => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
            onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
        }, {
            readonly type: string;
            readonly disabled: boolean;
            readonly label: string;
            readonly id: string;
            readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown>;
            readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly autosize: import("..").InputAutoSize;
            readonly autocomplete: string;
            readonly form: string;
            readonly readonly: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showPassword: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly suffixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
            readonly prefixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
            readonly containerRole: string;
            readonly tabindex: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly inputStyle: import("vue").StyleValue;
        }>> & Record<string, any>;
        Search: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    clearQuery: (which: import("./src/transfer").TransferDirection) => void;
    hasButtonTexts: import("vue").ComputedRef<boolean>;
    leftPanelTitle: import("vue").ComputedRef<string>;
    rightPanelTitle: import("vue").ComputedRef<string>;
    panelFilterPlaceholder: import("vue").ComputedRef<string>;
    optionRender: import("vue").ComputedRef<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    isEmpty: (val: unknown) => boolean;
    isUndefined: (val: any) => val is undefined;
    ElButton: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
        readonly icon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
        readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "button" | "submit" | "reset", unknown, "button", boolean>;
        readonly loading: BooleanConstructor;
        readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
        readonly plain: BooleanConstructor;
        readonly text: BooleanConstructor;
        readonly link: BooleanConstructor;
        readonly bg: BooleanConstructor;
        readonly autofocus: BooleanConstructor;
        readonly round: BooleanConstructor;
        readonly circle: BooleanConstructor;
        readonly color: StringConstructor;
        readonly dark: BooleanConstructor;
        readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
            readonly icon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "button" | "submit" | "reset", unknown, "button", boolean>;
            readonly loading: BooleanConstructor;
            readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
            readonly plain: BooleanConstructor;
            readonly text: BooleanConstructor;
            readonly link: BooleanConstructor;
            readonly bg: BooleanConstructor;
            readonly autofocus: BooleanConstructor;
            readonly round: BooleanConstructor;
            readonly circle: BooleanConstructor;
            readonly color: StringConstructor;
            readonly dark: BooleanConstructor;
            readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }>>;
        emit: (event: "click", evt: MouseEvent) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        buttonGroupContext: import("../..").ButtonGroupContext | undefined;
        globalConfig: import("vue").Ref<import("..").ButtonConfigContext | undefined>;
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
        form: import("../..").FormContext | undefined;
        _size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        _disabled: import("vue").ComputedRef<boolean>;
        _ref: import("vue").Ref<HTMLButtonElement | undefined>;
        _type: import("vue").ComputedRef<"" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text">;
        autoInsertSpace: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        shouldAddSpace: import("vue").ComputedRef<boolean>;
        buttonStyle: import("vue").ComputedRef<Record<string, string>>;
        handleClick: (evt: MouseEvent) => void;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
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
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}>> & Record<string, any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (evt: MouseEvent) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
        readonly icon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
        readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "button" | "submit" | "reset", unknown, "button", boolean>;
        readonly loading: BooleanConstructor;
        readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
        readonly plain: BooleanConstructor;
        readonly text: BooleanConstructor;
        readonly link: BooleanConstructor;
        readonly bg: BooleanConstructor;
        readonly autofocus: BooleanConstructor;
        readonly round: BooleanConstructor;
        readonly circle: BooleanConstructor;
        readonly color: StringConstructor;
        readonly dark: BooleanConstructor;
        readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
        readonly text: boolean;
        readonly icon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loadingIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
        readonly autoInsertSpace: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly plain: boolean;
        readonly link: boolean;
        readonly bg: boolean;
        readonly autofocus: boolean;
        readonly round: boolean;
        readonly circle: boolean;
        readonly dark: boolean;
    }>> & {
        ButtonGroup: import("vue").DefineComponent<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
        }>>, {
            readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
        }>;
    };
    ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly color: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
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
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly color: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>>, {}>> & Record<string, any>;
    ArrowLeft: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    ArrowRight: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    TransferPanel: import("vue").DefineComponent<{
        readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
        readonly optionRender: {
            readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly placeholder: StringConstructor;
        readonly title: StringConstructor;
        readonly filterable: BooleanConstructor;
        readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
        readonly filterMethod: {
            readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
        readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
            readonly label: "label";
            readonly key: "key";
            readonly disabled: "disabled";
        }>, boolean>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
            readonly optionRender: {
                readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: StringConstructor;
            readonly title: StringConstructor;
            readonly filterable: BooleanConstructor;
            readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
            readonly filterMethod: {
                readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
            readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
                readonly label: "label";
                readonly key: "key";
                readonly disabled: "disabled";
            }>, boolean>;
        }>> & {
            "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
        }>>;
        emit: (event: "checked-change", value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        OptionContent: ({ option }: {
            option: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        t: import("../..").Translator;
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
        panelState: {
            checked: import("./src/transfer").TransferKey[];
            allChecked: boolean;
            query: string;
            inputHover: boolean;
            checkChangeByUser: boolean;
        };
        propsAlias: import("vue").ComputedRef<{
            label: string;
            key: string;
            disabled: string;
        }>;
        filteredData: import("vue").ComputedRef<import("./src/transfer").TransferDataItem[]>;
        checkedSummary: import("vue").ComputedRef<string>;
        isIndeterminate: import("vue").ComputedRef<boolean>;
        handleAllCheckedChange: (value: import("..").CheckboxValueType) => void;
        hasNoMatch: import("vue").ComputedRef<boolean>;
        hasFooter: import("vue").ComputedRef<boolean>;
        checked: import("vue").Ref<import("./src/transfer").TransferKey[]>;
        allChecked: import("vue").Ref<boolean>;
        query: import("vue").Ref<string>;
        inputHover: import("vue").Ref<boolean>;
        isEmpty: (val: unknown) => boolean;
        ElCheckbox: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
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
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
            }>>;
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            inputId: import("vue").Ref<string | undefined>;
            isLabeledByFormItem: import("vue").ComputedRef<boolean>;
            isChecked: import("vue").ComputedRef<boolean>;
            isDisabled: import("vue").ComputedRef<boolean>;
            checkboxSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            hasOwnLabel: import("vue").ComputedRef<boolean>;
            model: import("vue").WritableComputedRef<any>;
            handleChange: (e: Event) => void;
            onClickRoot: (e: MouseEvent) => Promise<void>;
            focus: import("vue").Ref<boolean>;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
            change: (val: import("..").CheckboxValueType) => boolean;
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
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
            onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
        }>> & {
            CheckboxButton: import("vue").DefineComponent<{
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                    onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
                checkboxGroup: import("..").ICheckboxGroupInstance;
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
                activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType) => boolean;
                change: (val: import("..").CheckboxValueType) => boolean;
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
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
                onChange?: ((val: import("..").CheckboxValueType) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType) => any) | undefined;
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
            CheckboxGroup: import("vue").DefineComponent<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    modelValue: {
                        type: import("vue").PropType<(string | number)[]>;
                        default: () => never[];
                    };
                    disabled: BooleanConstructor;
                    min: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    max: {
                        type: NumberConstructor;
                        default: undefined;
                    };
                    size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    label: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    fill: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    textColor: {
                        type: StringConstructor;
                        default: undefined;
                    };
                    tag: {
                        type: StringConstructor;
                        default: string;
                    };
                    validateEvent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & {
                    onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                }>>;
                emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
                elFormItem: import("../..").FormItemContext | undefined;
                groupId: import("vue").Ref<string | undefined>;
                isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
                changeEvent: (value: import("..").CheckboxValueType[]) => void;
                modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
                change: (val: import("..").CheckboxValueType[]) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            }, {
                disabled: boolean;
                label: string;
                id: string;
                modelValue: (string | number)[];
                fill: string;
                textColor: string;
                validateEvent: boolean;
                min: number;
                max: number;
                tag: string;
            }>;
        };
        ElCheckboxGroup: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            modelValue: {
                type: import("vue").PropType<(string | number)[]>;
                default: () => never[];
            };
            disabled: BooleanConstructor;
            min: {
                type: NumberConstructor;
                default: undefined;
            };
            max: {
                type: NumberConstructor;
                default: undefined;
            };
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            id: {
                type: StringConstructor;
                default: undefined;
            };
            label: {
                type: StringConstructor;
                default: undefined;
            };
            fill: {
                type: StringConstructor;
                default: undefined;
            };
            textColor: {
                type: StringConstructor;
                default: undefined;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            validateEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: import("vue").PropType<(string | number)[]>;
                    default: () => never[];
                };
                disabled: BooleanConstructor;
                min: {
                    type: NumberConstructor;
                    default: undefined;
                };
                max: {
                    type: NumberConstructor;
                    default: undefined;
                };
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                label: {
                    type: StringConstructor;
                    default: undefined;
                };
                fill: {
                    type: StringConstructor;
                    default: undefined;
                };
                textColor: {
                    type: StringConstructor;
                    default: undefined;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            }>>;
            emit: ((event: "update:modelValue", val: import("..").CheckboxValueType[]) => void) & ((event: "change", val: import("..").CheckboxValueType[]) => void);
            elFormItem: import("../..").FormItemContext | undefined;
            groupId: import("vue").Ref<string | undefined>;
            isLabeledByFormItem: import("vue").ComputedRef<boolean>;
            checkboxGroupSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
            changeEvent: (value: import("..").CheckboxValueType[]) => void;
            modelValue: import("vue").WritableComputedRef<import("..").CheckboxValueType[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("..").CheckboxValueType[]) => boolean;
            change: (val: import("..").CheckboxValueType[]) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<(string | number)[]>;
                default: () => never[];
            };
            disabled: BooleanConstructor;
            min: {
                type: NumberConstructor;
                default: undefined;
            };
            max: {
                type: NumberConstructor;
                default: undefined;
            };
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            id: {
                type: StringConstructor;
                default: undefined;
            };
            label: {
                type: StringConstructor;
                default: undefined;
            };
            fill: {
                type: StringConstructor;
                default: undefined;
            };
            textColor: {
                type: StringConstructor;
                default: undefined;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            validateEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onChange?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("..").CheckboxValueType[]) => any) | undefined;
        }, {
            disabled: boolean;
            label: string;
            id: string;
            modelValue: (string | number)[];
            fill: string;
            textColor: string;
            validateEvent: boolean;
            min: number;
            max: number;
            tag: string;
        }>>;
        ElInput: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
            readonly resize: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
            readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly formatter: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly parser: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
        }, {
            PENDANT_MAP: {
                readonly suffix: "append";
                readonly prefix: "prepend";
            };
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }>> & {
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onInput?: ((value: string) => any) | undefined;
                onFocus?: ((evt: FocusEvent) => any) | undefined;
                onBlur?: ((evt: FocusEvent) => any) | undefined;
                onClear?: (() => any) | undefined;
                onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            }>>;
            emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "clear") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void);
            instance: import("vue").ComponentInternalInstance;
            rawAttrs: {
                [x: string]: unknown;
            };
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            containerAttrs: import("vue").ComputedRef<Record<string, unknown>>;
            attrs: import("vue").ComputedRef<Record<string, unknown>>;
            form: import("../..").FormContext | undefined;
            formItem: import("../..").FormItemContext | undefined;
            inputId: import("vue").Ref<string | undefined>;
            inputSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            inputDisabled: import("vue").ComputedRef<boolean>;
            nsInput: {
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
            nsTextarea: {
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
            input: import("vue").ShallowRef<HTMLInputElement | undefined>;
            textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
            focused: import("vue").Ref<boolean>;
            hovering: import("vue").Ref<boolean>;
            isComposing: import("vue").Ref<boolean>;
            passwordVisible: import("vue").Ref<boolean>;
            countStyle: import("vue").Ref<import("vue").StyleValue | undefined>;
            textareaCalcStyle: import("vue").ShallowRef<import("vue").StyleValue>;
            _ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
            needStatusIcon: import("vue").ComputedRef<boolean>;
            validateState: import("vue").ComputedRef<"" | "success" | "error" | "validating">;
            validateIcon: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            passwordIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            textareaStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            nativeInputValue: import("vue").ComputedRef<string>;
            showClear: import("vue").ComputedRef<boolean>;
            showPwdVisible: import("vue").ComputedRef<boolean>;
            isWordLimitVisible: import("vue").ComputedRef<boolean>;
            textLength: import("vue").ComputedRef<number>;
            inputExceed: import("vue").ComputedRef<boolean>;
            suffixVisible: import("vue").ComputedRef<boolean>;
            recordCursor: () => void;
            setCursor: () => void;
            resizeTextarea: () => void;
            setNativeInputValue: () => void;
            calcIconOffset: (place: "suffix" | "prefix") => void;
            updateIconOffset: () => void;
            handleInput: (event: Event) => Promise<void>;
            handleChange: (event: Event) => void;
            handleCompositionStart: (event: CompositionEvent) => void;
            handleCompositionUpdate: (event: CompositionEvent) => void;
            handleCompositionEnd: (event: CompositionEvent) => void;
            handlePasswordVisible: () => void;
            focus: () => Promise<void>;
            blur: () => void | undefined;
            handleFocus: (event: FocusEvent) => void;
            handleBlur: (event: FocusEvent) => void;
            handleMouseLeave: (evt: MouseEvent) => void;
            handleMouseEnter: (evt: MouseEvent) => void;
            handleKeydown: (evt: KeyboardEvent) => void;
            select: () => void;
            clear: () => void;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
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
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {}>> & Record<string, any>;
            CircleClose: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            NOOP: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: string) => boolean;
            input: (value: string) => boolean;
            change: (value: string) => boolean;
            focus: (evt: FocusEvent) => boolean;
            blur: (evt: FocusEvent) => boolean;
            clear: () => boolean;
            mouseleave: (evt: MouseEvent) => boolean;
            mouseenter: (evt: MouseEvent) => boolean;
            keydown: (evt: Event | KeyboardEvent) => boolean;
            compositionstart: (evt: CompositionEvent) => boolean;
            compositionupdate: (evt: CompositionEvent) => boolean;
            compositionend: (evt: CompositionEvent) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
            readonly resize: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "vertical" | "none" | "both" | "horizontal", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize) | ((new (...args: any[]) => import("..").InputAutoSize & {}) | (() => import("..").InputAutoSize))[], unknown, unknown, false, boolean>;
            readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly formatter: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly parser: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly form: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
            readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
        }>> & {
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onClear?: (() => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
            onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
        }, {
            readonly type: string;
            readonly disabled: boolean;
            readonly label: string;
            readonly id: string;
            readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown>;
            readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly autosize: import("..").InputAutoSize;
            readonly autocomplete: string;
            readonly form: string;
            readonly readonly: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showPassword: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly suffixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
            readonly prefixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
            readonly containerRole: string;
            readonly tabindex: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly inputStyle: import("vue").StyleValue;
        }>> & Record<string, any>;
        Search: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "checked-change": (value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
        readonly optionRender: {
            readonly type: import("vue").PropType<(option: import("./src/transfer").TransferDataItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly placeholder: StringConstructor;
        readonly title: StringConstructor;
        readonly filterable: BooleanConstructor;
        readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
        readonly filterMethod: {
            readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly defaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
        readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
            readonly label: "label";
            readonly key: "key";
            readonly disabled: "disabled";
        }>, boolean>;
    }>> & {
        "onChecked-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
    }, {
        readonly props: import("./src/transfer").TransferPropsAlias;
        readonly data: import("./src/transfer").TransferDataItem[];
        readonly filterable: boolean;
        readonly format: import("./src/transfer").TransferFormat;
        readonly defaultChecked: import("./src/transfer").TransferKey[];
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: import("./src/transfer").TransferKey[], direction: import("./src/transfer").TransferDirection, movedKeys: import("./src/transfer").TransferKey[]) => boolean;
    "update:modelValue": (value: import("./src/transfer").TransferKey[]) => boolean;
    "left-check-change": (value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => boolean;
    "right-check-change": (value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]) | ((new (...args: any[]) => import("./src/transfer").TransferDataItem[]) | (() => import("./src/transfer").TransferDataItem[]))[], unknown, unknown, () => never[], boolean>;
    readonly titles: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
    readonly buttonTexts: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
    readonly filterPlaceholder: StringConstructor;
    readonly filterMethod: {
        readonly type: import("vue").PropType<(query: string, item: import("./src/transfer").TransferDataItem) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly leftDefaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    readonly rightDefaultChecked: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    readonly renderContent: {
        readonly type: import("vue").PropType<import("./src/transfer").renderContent>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]) | ((new (...args: any[]) => import("./src/transfer").TransferKey[]) | (() => import("./src/transfer").TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat) | ((new (...args: any[]) => import("./src/transfer").TransferFormat) | (() => import("./src/transfer").TransferFormat))[], unknown, unknown, () => {}, boolean>;
    readonly filterable: BooleanConstructor;
    readonly props: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias) | ((new (...args: any[]) => import("./src/transfer").TransferPropsAlias) | (() => import("./src/transfer").TransferPropsAlias))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{
        readonly label: "label";
        readonly key: "key";
        readonly disabled: "disabled";
    }>, boolean>;
    readonly targetOrder: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "push" | "unshift" | "original", unknown, "original", boolean>;
    readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((value: import("./src/transfer").TransferKey[], direction: import("./src/transfer").TransferDirection, movedKeys: import("./src/transfer").TransferKey[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./src/transfer").TransferKey[]) => any) | undefined;
    "onLeft-check-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
    "onRight-check-change"?: ((value: import("./src/transfer").TransferKey[], movedKeys?: import("./src/transfer").TransferKey[] | undefined) => any) | undefined;
}, {
    readonly modelValue: import("./src/transfer").TransferKey[];
    readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly props: import("./src/transfer").TransferPropsAlias;
    readonly data: import("./src/transfer").TransferDataItem[];
    readonly titles: [string, string];
    readonly filterable: boolean;
    readonly format: import("./src/transfer").TransferFormat;
    readonly buttonTexts: [string, string];
    readonly leftDefaultChecked: import("./src/transfer").TransferKey[];
    readonly rightDefaultChecked: import("./src/transfer").TransferKey[];
    readonly targetOrder: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "push" | "unshift" | "original", unknown>;
}>> & Record<string, any>;
export default ElTransfer;
export * from './src/transfer';
