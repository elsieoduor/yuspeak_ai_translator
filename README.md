# YuSpeak AI Translator Project

This project allows users to input text and receive translations in different languages using a generative AI model. The translation service uses Google Gemini's generative AI API (or any similar AI model) for real-time translations. Users can select the target language, input text, and get an instant translation.

## Features

- **Input Text**: Users can enter text that they want to translate.
- **Language Selection**: Choose a target language for translation.
- **Real-Time Translation**: Translates the input text into the selected language using Google Gemini AI.
- **Copy and Favorite**: Copy the translated text to the clipboard and toggle favorite translations.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/elsieoduor/yuspeak_ai_translator.git
cd yuspeak_ai_translator
```

### 2. Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
```
or
```bash
yarn install
```

### 3. Set Up the API Key

This project uses the Google Gemini API (or another generative AI model). To authenticate the API requests, you need to create a `.env` file in the root of the project and add your API key.

Example `.env` file:

```bash
GEMINI_API_KEY=your-api-key-here
```

Replace `your-api-key-here` with your actual API key.

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
```
or
```bash
yarn dev
```

You can now access the application at `http://localhost:3000`.

## How It Works

1. **Input**: The user enters text in the input field and selects the target language.
2. **Request to Gemini API**: The input text and selected language are sent to the backend, which calls the Gemini API to perform the translation.
3. **Response**: The translated text is returned from the API and displayed on the front end with some additional information.
4. **Actions**: The user can copy the translated text to the clipboard or mark it as a favorite.

## Code Structure

The project consists of the following main parts:

- **`app/page.tsx`**: The main page where the user can input text and view the translation.
- **`hooks/useTranslate.jsx`**: A custom hook that handles the translation logic, including sending requests to the Gemini API and managing the state for translated text and loading status.
- **`components/`**: The UI components for text input, language selection, and displaying the translated result.
- **`app/globals.css and Tailind inline styling`**: Contains the CSS for styling the application.

## Example Use of `useTranslate` Hook

The `useTranslate` hook is responsible for calling the API and returning the translated text.

```tsx
const { targetText, isLoading } = useTranslate(sourceText, selectedLanguage);
```

This hook handles the translation logic and updates the UI based on whether the translation is in progress.

## Contributing

If you'd like to contribute to the project:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Google Gemini API**: This project uses Google Gemini's generative AI API for translation purposes. Learn more about the API [here](https://cloud.google.com/gen-ai).
- **React**: The front-end of this project is built using React.

