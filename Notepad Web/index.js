console.log("Hey! I'm index.js");

function id(id) {
    if (document.getElementById(id)) {
        return document.getElementById(id)
    } else {
        return false
    }
};

const textarea = id("textarea");

textarea.addEventListener('input', ev => {
    updateValue();
    autoSave();
});

const fileInput = id("fileInput");

fileInput.addEventListener('change', event => {


    const fileList = event.target.files; // Get the list of selected files

    if (!fileList.length) return; // Check if a file was selected

    const reader = new FileReader();

    reader.onload = function (e) {

        const data = e.target.result;

        textarea.value = data;

        updateValue();
        autoSave();

    };

    reader.readAsText(fileList[0]); // Read the first selected file as text

});

function lowCase(txt) { return txt.toLowerCase() };

function ChangeCase(caseType) {

    let text = textarea.value;

    if (typeof caseType !== "string" || !caseType) {
        throw new Error("Invalid case type. Must be a string.");
    }

    switch (caseType.toLowerCase()) {
        case 'sentencecase': textarea.value = lowCase(text).replace(/(^\s*\w|[\.!\?]\s*\w)/g, txt => txt.toUpperCase());
            break
        case 'titlecase': textarea.value = lowCase(text).replace(/\b\w/g, txt => txt.toUpperCase());
            break
        case 'uppercase': textarea.value = text.toUpperCase();
            break
        case 'lowercase': textarea.value = text.toLowerCase();
            break
        default: throw new Error(`Unsupported case type: ${caseType}`);
    }


};

function updateValue() {

    let text = textarea.value;

    // Character count (including whitespaces)
    const charCount = text.length;

    // Split the text into an array of words
    const words = text.trim().split(/\s+/);

    // Word count (excluding empty strings)
    const wordCount = words.filter(word => word !== "").length;

    // Whitespace count (excluding line breaks)
    const whitespaceCount = charCount - text.replace(/\s/g, "").length;

    // Line count
    const lineCount = text.split(/\r?\n/).length;

    id('char').innerText = charCount;
    id('words').innerText = wordCount;
    id('spaces').innerText = whitespaceCount;
    id('lines').innerText = lineCount;

}

function autoSave(ele) {
    if (ele) {
        setTimeout(() => {
            ele.style.background = 'var(--primary-color)'
        }, 1500);
    }

    // Save the updated value to local storage
    localStorage.setItem("notepad", textarea.value)

};

function readAutoSave() {
    // Load initial value from local storage
    textarea.value = localStorage.getItem("notepad") || "Hello and Hi !!";

    updateValue()
    autoSave();
};

async function paste() {
    try {
        const text = await navigator.clipboard.readText();
        // Do something with the pasted text (e.g., display it in an element)
        textarea.value = text;

        updateValue();
        autoSave();

    } catch (err) {
        console.error("Failed to read clipboard content:", err);
    }
};

function copyAll(ele) {

    let text = textarea.value;

    if (!navigator.clipboard) {
        // Clipboard API not supported, fallback to older method (if needed)
        return false;
    }
    return navigator.clipboard.writeText(text).then(function () {
        console.log("Copying to clipboard successful!");
        ele.style.background = 'green';
        autoSave(ele)
    }, function (err) {
        console.error("Copying to clipboard failed!", err);
        ele.style.background = 'red';
        autoSave(ele)
    });

};

function clearAll() {
    textarea.value = '';
    updateValue();
    autoSave();
};

function downloadFile() {

    let text = textarea.value

    // Create a Blob object with the text content and file type
    const blob = new Blob([text], { type: 'text/plain' });

    // Create a temporary anchor element
    const link = document.createElement('a');

    // Set the href of the link to a data URL containing the Blob object
    link.href = URL.createObjectURL(blob);

    // Set the download attribute of the link to the desired filename
    link.download = 'Yourtext.txt';

    // Simulate a click on the link to trigger the download
    link.click();

    // Revoke the temporary URL to avoid memory leaks
    URL.revokeObjectURL(link.href);


};

readAutoSave();