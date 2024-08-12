# NextJS - App Router 'use client' Inserter at Line 1

This VSCode extension helps you easily insert the `'use client'` directive at the top of your Next.js client components. The extension provides a command to insert `'use client'` at line 1 or at the current cursor position based on your preference.

 ## TLDR
- Open VSCODE
- Open options menu `ctrl/cmd + p` (or rebind to `ctrl + ctrl` like a real gigachad)
- type `> extension install from vsix` or > `vsix`  will do. > Enter
-Search for `nextjs-use-client-inserter-helper-1.0.0.vsix` and install that and g2g.

![aoutput](https://github.com/user-attachments/assets/318dd2d8-b05c-4f74-a396-3ecbc710f9a7)

## Features

- Inserts `'use client'` at line 1 of your file.
- Configurable to insert the directive at the current cursor position instead.
- Avoids inserting duplicate directives if it's already present at the top.

## Installation

### Prerequisites

- Ensure you have [Visual Studio Code](https://code.visualstudio.com/) installed.
- Node.js and npm should also be installed on your system.

### Local Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/remcostoeten/vscode-extension-insert-use-client-for-nextjs-with-ease.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd vscode-extension-insert-use-client-for-nextjs-with-ease
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Build the extension**:
    ```bash
    npm run build
    ```

5. **Open the project in VSCode**:
    ```bash
    code .
    ``` 

6. **Launch the extension**:
    - Press `F5` to open a new VSCode window with your extension loaded.

## Usage

- Use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and search for `Insert 'use client' at line 1 on shortcut`.
- The directive will be inserted at the top of the active file or at the cursor position based on your configuration.

## Configuration

You can customize the behavior of this extension by adding the following settings to your `settings.json` in VSCode:

```json
{
  "useClientInsertion.insertOnFirstLine": true,
  "useClientInsertion.wordToInsert": "\"use client\";"
}
