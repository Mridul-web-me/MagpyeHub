import ExampleTheme from "./themes/ExampleTheme";
import LexicalComposer from "@lexical/react/LexicalComposer";
import RichTextPlugin from "@lexical/react/LexicalRichTextPlugin";
import ContentEditable from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import AutoFocusPlugin from "@lexical/react/LexicalAutoFocusPlugin";
// import TreeViewPlugin from "./plugins/TreeViewPlugin";
// import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import LinkPlugin from "@lexical/react/LexicalLinkPlugin";
import ListPlugin from "@lexical/react/LexicalListPlugin";
import LexicalMarkdownShortcutPlugin from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import TreeViewPlugin from "./Plugins/TreeViewPlugin";
import CodeHighlightPlugin from "./Plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./Plugins/AutoLinkPlugin";
import ListMaxIndentLevelPlugin from "./Plugins/ListMaxIndentLevelPlugin";
import ToolbarPlugin from "./Plugins/ToolbarPlugin";
import './Editor.css'

// import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
// import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
// import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

const MyEditor = () => {
    // function onChange(editorState) {
    //     editorState.read(() => {
    //         Read the contents of the EditorState here.
    //         const root = $getRoot();
    //         const selection = $getSelection();

    //         console.log(root, selection);
    //     });
    // }

    // function MyCustomAutoFocusPlugin() {
    //     const [editor] = useLexicalComposerContext();

    //     useEffect(() => {
    //         Focus the editor when the effect fires!
    //         editor.focus();
    //     }, [editor]);

    //     return null;
    // }
    // function onError(error) {
    //     console.error(error);
    // }


    // const initialConfig = {
    //     onError,
    // };

    const editorConfig = {
        // The editor theme
        theme: ExampleTheme,
        // Handling of errors during update
        onError(error) {
            throw error;
        },
        // Any custom nodes go here
        nodes: [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode
        ]
    };

    return (
        <div>
            <LexicalComposer initialConfig={editorConfig}>
                <div className="editor-container">
                    <ToolbarPlugin />
                    <div className="editor-inner">
                        <RichTextPlugin
                            contentEditable={<ContentEditable className="editor-input" />}
                            placeholder="Write Something Here"
                        />
                        <HistoryPlugin />
                        <TreeViewPlugin />
                        <AutoFocusPlugin />
                        <CodeHighlightPlugin />
                        <ListPlugin />
                        <LinkPlugin />
                        <AutoLinkPlugin />
                        <ListMaxIndentLevelPlugin maxDepth={7} />
                        <LexicalMarkdownShortcutPlugin transformers={TRANSFORMERS} />
                    </div>
                </div>
            </LexicalComposer>
        </div>
    )
}

export default MyEditor