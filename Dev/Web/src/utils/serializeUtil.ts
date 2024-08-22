export const decodeMarkdown = (markdown: string) => {
    return markdown.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
}