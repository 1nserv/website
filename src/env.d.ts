/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
declare module 'markdown-it' {
    const MarkdownIt: any;
    export default MarkdownIt;
}
