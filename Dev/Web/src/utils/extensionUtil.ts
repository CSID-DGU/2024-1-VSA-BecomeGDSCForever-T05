export const extensionUtil = (fileName: string) => {
    const extension = fileName.split(".").pop();

    if (extension === "js") {
        return "javascript";
    } else if (extension === "c") {
        return "c";
    } else if (extension === "java") {
        return "java";
    } else if (extension === "py") {
        return "python";
    } else if (extension === "cpp") {
        return "cpp";
    }
}