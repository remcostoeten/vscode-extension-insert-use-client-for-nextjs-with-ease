# NextJS - App Router 'use client' Inserter at Line 1

This VSCode extension helps you easily insert the `'use client'` directive at the top of your Next.js client components. The extension provides a command to insert `'use client'` at line 1 or at the current cursor position based on your preference.

 ## TLDR
 - Install from official marketplace [here](https://marketplace.visualstudio.com/items?itemName=RemcoStoeten.nextjs-use-client-inserter-helper)

#### Or work with the source:
 
- Open VSCODE
- Open options menu `ctrl/cmd + p` (or rebind to `ctrl + ctrl` like a real gigachad)
- type `> extension install from vsix` or > `vsix`  will do. > Enter
-Search for `nextjs-use-client-inserter-helper-1.0.0.vsix` and install that and g2g.

![aoutput](https://github.com/user-attachments/assets/318dd2d8-b05c-4f74-a396-3ecbc710f9a7)

## Features

- Inserts `'use client'` at line 1 of your file.
- Configurable to insert the directive at the current cursor position instead.
- Avoids inserting duplicate directives if it's already present at the top.

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

    <small>For this step the vsce cli is needed. Google for this, easy install. Or just directly install the `.vsix` from the repo.
5. **Open the project in VSCode**:
    ```bash
       vsce package
       ``` 

## Usage
  Refer to TLDR section

## Configuration

You can customize the behavior of this extension by adding the following settings to your `settings.json` in VSCode:

```json
{
  "useClientInsertion.insertOnFirstLine": true,
  "useClientInsertion.wordToInsert": "\"use client\";"
}
